/**
 * Live translation fetcher from Google Sheets
 * Changes in Google Sheets will reflect on the website automatically
 * Falls back to local JSON files if sheet is not available
 */

const SHEET_ID = '13i8TqD8LaGqjpl-V4XrhuDbztLQ2qxLAIRJMLc3VwCA';
const LOCALES = ['en', 'ru', 'uz'] as const;
export type Locale = (typeof LOCALES)[number];

// Cache for server-side
let translationCache: {
  data: Record<string, Record<string, unknown>>;
  timestamp: number;
} | null = null;

const CACHE_TTL = 60 * 1000; // 1 minute cache

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

async function fetchFromSheet(): Promise<Record<string, Record<string, unknown>> | null> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, {
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Google Sheet not accessible (${response.status}). Using local files.`);
      return null;
    }

    const csv = await response.text();

    // Check if we got HTML (not published) instead of CSV
    if (csv.trim().startsWith('<!DOCTYPE') || csv.trim().startsWith('<html')) {
      console.warn('Google Sheet not published to web. Using local files.');
      return null;
    }

    if (!csv.trim() || csv.trim().length < 10) {
      console.warn('Google Sheet is empty. Using local files.');
      return null;
    }

    const rows = parseCSV(csv);

    if (rows.length === 0) {
      console.warn('No rows in sheet. Using local files.');
      return null;
    }

    const headers = rows[0].map(h => h.toLowerCase().trim());
    const keyIndex = headers.indexOf('key');

    if (keyIndex === -1) {
      console.warn('Sheet must have a "key" column. Using local files.');
      return null;
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

    return translations;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('Google Sheet request timed out. Using local files.');
    } else {
      console.warn('Error fetching Google Sheet:', error);
    }
    return null;
  }
}

/**
 * Get translations for a specific locale
 * Uses caching to avoid hitting Google Sheets on every request
 * Falls back to null if sheet is not available (caller should use local files)
 */
export async function getSheetTranslations(locale: Locale): Promise<Record<string, unknown> | null> {
  const now = Date.now();

  // Check cache
  if (translationCache && (now - translationCache.timestamp) < CACHE_TTL) {
    return translationCache.data[locale] || null;
  }

  const allTranslations = await fetchFromSheet();

  if (allTranslations) {
    translationCache = {
      data: allTranslations,
      timestamp: now,
    };
    return allTranslations[locale] || null;
  }

  // Return cached data if available, even if stale
  if (translationCache) {
    return translationCache.data[locale] || null;
  }

  // Return null to signal caller should use local files
  return null;
}

/**
 * Force refresh the cache
 */
export function clearCache(): void {
  translationCache = null;
}
