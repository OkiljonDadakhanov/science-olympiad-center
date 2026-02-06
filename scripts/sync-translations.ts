/**
 * Script to sync translations from Google Sheets to JSON files
 *
 * Google Sheet structure:
 * | key                    | en           | ru            | uz             |
 * |------------------------|--------------|---------------|----------------|
 * | common.loading         | Loading...   | Загрузка...   | Yuklanmoqda... |
 * | common.error           | Error        | Ошибка        | Xatolik        |
 * | nav.aboutUs            | About Us     | О нас         | Biz haqimizda  |
 *
 * Usage:
 *   npx ts-node scripts/sync-translations.ts
 *   # or add to package.json: "sync-translations": "npx ts-node scripts/sync-translations.ts"
 */

import * as fs from 'fs';
import * as path from 'path';

const SHEET_ID = '13i8TqD8LaGqjpl-V4XrhuDbztLQ2qxLAIRJMLc3VwCA';
const LOCALES = ['en', 'ru', 'uz'] as const;

// Google Sheets published CSV URL (make sure sheet is published to web)
function getSheetUrl(sheetId: string, gid: string = '0'): string {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

// Parse CSV to rows
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const nextChar = csv[i + 1];

    if (insideQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        insideQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        insideQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentField.trim());
        currentField = '';
      } else if (char === '\n' || (char === '\r' && nextChar === '\n')) {
        currentRow.push(currentField.trim());
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
        if (char === '\r') i++;
      } else if (char !== '\r') {
        currentField += char;
      }
    }
  }

  // Handle last field/row
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }

  return rows;
}

// Set nested object value from dot-notation key
function setNestedValue(obj: Record<string, unknown>, key: string, value: string): void {
  const parts = key.split('.');
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current)) {
      current[part] = {};
    }
    current = current[part] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]] = value;
}

// Fetch and parse Google Sheet
async function fetchTranslations(): Promise<Record<string, Record<string, unknown>>> {
  const url = getSheetUrl(SHEET_ID);

  console.log('Fetching translations from Google Sheets...');
  console.log(`URL: ${url}\n`);

  const response = await fetch(url, {
    headers: {
      'Accept': 'text/csv',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet: ${response.status} ${response.statusText}`);
  }

  const csv = await response.text();
  const rows = parseCSV(csv);

  if (rows.length === 0) {
    throw new Error('Sheet is empty');
  }

  // First row is header
  const headers = rows[0].map(h => h.toLowerCase().trim());
  const keyIndex = headers.indexOf('key');

  if (keyIndex === -1) {
    throw new Error('Sheet must have a "key" column');
  }

  // Find locale columns
  const localeIndices: Record<string, number> = {};
  for (const locale of LOCALES) {
    const index = headers.indexOf(locale);
    if (index !== -1) {
      localeIndices[locale] = index;
    } else {
      console.warn(`Warning: Column for locale "${locale}" not found in sheet`);
    }
  }

  // Build translation objects
  const translations: Record<string, Record<string, unknown>> = {};
  for (const locale of LOCALES) {
    translations[locale] = {};
  }

  // Process each row
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const key = row[keyIndex]?.trim();

    if (!key) continue; // Skip empty keys

    for (const locale of LOCALES) {
      const colIndex = localeIndices[locale];
      if (colIndex !== undefined && row[colIndex] !== undefined) {
        const value = row[colIndex].trim();
        if (value) {
          setNestedValue(translations[locale], key, value);
        }
      }
    }
  }

  return translations;
}

// Write translations to JSON files
async function writeTranslationFiles(translations: Record<string, Record<string, unknown>>): Promise<void> {
  const messagesDir = path.join(process.cwd(), 'messages');

  // Ensure messages directory exists
  if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir, { recursive: true });
  }

  for (const locale of LOCALES) {
    const filePath = path.join(messagesDir, `${locale}.json`);
    const content = JSON.stringify(translations[locale], null, 2);

    fs.writeFileSync(filePath, content + '\n', 'utf-8');
    console.log(`✓ Written: ${filePath}`);
  }
}

// Main execution
async function main(): Promise<void> {
  try {
    const translations = await fetchTranslations();

    // Count keys
    const keyCount = Object.keys(translations['en'] || {}).reduce((count, section) => {
      const sectionObj = translations['en'][section];
      if (typeof sectionObj === 'object' && sectionObj !== null) {
        return count + Object.keys(sectionObj as object).length;
      }
      return count + 1;
    }, 0);

    console.log(`\nFound translations for ${LOCALES.length} locales`);

    await writeTranslationFiles(translations);

    console.log('\n✅ Translation sync complete!');
  } catch (error) {
    console.error('\n❌ Error syncing translations:', error);
    process.exit(1);
  }
}

main();
