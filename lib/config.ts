// Centralized configuration for the application

export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.olympcenter.uz/api',
    endpoints: {
      news: '/news/',
      winners: '/winners/',
    },
  },
  site: {
    name: 'Science Olympiad Center',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://olympcenter.uz',
  },
} as const;

// Helper function to build API URLs
export function getApiUrl(endpoint: string): string {
  return `${config.api.baseUrl}${endpoint}`;
}
