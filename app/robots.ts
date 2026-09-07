import type { MetadataRoute } from 'next';

const baseUrl = 'https://hardenhq.onrender.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/monitor', '/scan-history', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
