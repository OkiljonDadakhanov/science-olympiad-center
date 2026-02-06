/**
 * Export existing JSON translations to CSV format for importing into Google Sheets
 *
 * Usage:
 *   npx ts-node scripts/export-translations-to-csv.ts
 *
 * This will create a translations.csv file that can be imported into Google Sheets
 */

import * as fs from 'fs';
import * as path from 'path';

const LOCALES = ['en', 'ru', 'uz'] as const;

// Flatten nested object to dot-notation keys
function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, newKey));
    } else {
      result[newKey] = String(value);
    }
  }

  return result;
}

// Escape CSV field
function escapeCSV(field: string): string {
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

async function main(): Promise<void> {
  const messagesDir = path.join(process.cwd(), 'messages');
  const translations: Record<string, Record<string, string>> = {};

  // Load all locale files
  for (const locale of LOCALES) {
    const filePath = path.join(messagesDir, `${locale}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      translations[locale] = flattenObject(content);
      console.log(`Loaded ${Object.keys(translations[locale]).length} keys from ${locale}.json`);
    } else {
      console.warn(`Warning: ${filePath} not found`);
      translations[locale] = {};
    }
  }

  // Collect all unique keys
  const allKeys = new Set<string>();
  for (const locale of LOCALES) {
    Object.keys(translations[locale]).forEach(key => allKeys.add(key));
  }

  // Sort keys for consistent output
  const sortedKeys = Array.from(allKeys).sort();

  // Build CSV
  const rows: string[] = [];

  // Header row
  rows.push(['key', ...LOCALES].join(','));

  // Data rows
  for (const key of sortedKeys) {
    const row = [
      escapeCSV(key),
      ...LOCALES.map(locale => escapeCSV(translations[locale][key] || ''))
    ];
    rows.push(row.join(','));
  }

  // Write CSV file
  const csvPath = path.join(process.cwd(), 'translations.csv');
  fs.writeFileSync(csvPath, rows.join('\n'), 'utf-8');

  console.log(`\n✅ Exported ${sortedKeys.length} translation keys to translations.csv`);
  console.log(`\nNext steps:`);
  console.log(`1. Open Google Sheets`);
  console.log(`2. File > Import > Upload translations.csv`);
  console.log(`3. Share the sheet and publish it to web (File > Share > Publish to web)`);
  console.log(`4. Update the SHEET_ID in scripts/sync-translations.ts if needed`);
}

main();
