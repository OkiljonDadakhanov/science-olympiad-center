/**
 * Runtime translation fetcher from Google Sheets
 *
 * This module provides functions to fetch translations from Google Sheets
 * at runtime with caching. Useful for development or when you want
 * translations to update without rebuilding.
 *
 * For production, prefer using the sync-translations script at build time.
 */

const SHEET_ID = '13i8TqD8LaGqjpl-V4XrhuDbztLQ2qxLAIRJMLc3VwCA';
const LOCALES = ['en', 'ru', 'uz'] as const;
type Locale = (typeof LOCALES)[number];

// In-memory cache
let cache: {
  data: Record<string, Record<string, unknown>> | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getSheetUrl(sheetId: string): string {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
}

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

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }

  return rows;
}

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

/**
 * Fetch all translations from Google Sheets
 * Results are cached in memory for CACHE_DURATION
 */
export async function fetchAllTranslations(): Promise<Record<string, Record<string, unknown>>> {
  // Return cached data if still valid
  if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  const url = getSheetUrl(SHEET_ID);
  const response = await fetch(url, {
    next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
  });

  if (!response.ok) {
    // Return cached data on error if available
    if (cache.data) {
      console.warn('Failed to fetch translations, using cached data');
      return cache.data;
    }
    throw new Error(`Failed to fetch translations: ${response.status}`);
  }

  const csv = await response.text();
  const rows = parseCSV(csv);

  if (rows.length === 0) {
    throw new Error('Sheet is empty');
  }

  const headers = rows[0].map(h => h.toLowerCase().trim());
  const keyIndex = headers.indexOf('key');

  if (keyIndex === -1) {
    throw new Error('Sheet must have a "key" column');
  }

  const localeIndices: Record<string, number> = {};
  for (const locale of LOCALES) {
    const index = headers.indexOf(locale);
    if (index !== -1) {
      localeIndices[locale] = index;
    }
  }

  const translations: Record<string, Record<string, unknown>> = {};
  for (const locale of LOCALES) {
    translations[locale] = {};
  }

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const key = row[keyIndex]?.trim();

    if (!key) continue;

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

  // Update cache
  cache = {
    data: translations,
    timestamp: Date.now(),
  };

  return translations;
}

/**
 * Fetch translations for a specific locale
 */
export async function fetchTranslations(locale: Locale): Promise<Record<string, unknown>> {
  const all = await fetchAllTranslations();
  return all[locale] || {};
}

/**
 * Clear the translation cache
 */
export function clearTranslationCache(): void {
  cache = { data: null, timestamp: 0 };
}
