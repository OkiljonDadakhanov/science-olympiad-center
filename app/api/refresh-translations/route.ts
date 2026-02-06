import { clearCache } from '@/lib/sheets-translations';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * API endpoint to refresh translations from Google Sheets
 *
 * Call this after making changes in Google Sheets to see updates immediately:
 * GET /api/refresh-translations
 */
export async function GET() {
  try {
    // Clear the translation cache
    clearCache();

    // Revalidate all pages to pick up new translations
    revalidatePath('/', 'layout');

    return NextResponse.json({
      success: true,
      message: 'Translation cache cleared. Changes will appear on next page load.',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
