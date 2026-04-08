import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://crosscartbd.com';

  return {
    rules: [
      {
        // 1. General Rule: Allow everything by default
        userAgent: '*',
        allow: '/',
      },
      {
        // 2. Security Rule: Block API Routes
        // Prevents bots from hitting your backend endpoints directly
        userAgent: '*',
        disallow: '/api/',
      },
      {
        // 3. Privacy Rule: Block User Dashboard
        // Prevents indexing of private user data (parcels, profiles)
        userAgent: '*',
        disallow: '/dashboard/',
      },
      {
        // 4. Privacy Rule: Block Admin Panel
        userAgent: '*',
        disallow: '/admin/',
      },
      {
        // 5. Specific Rule: Block Next.js Internal Files
        userAgent: '*',
        disallow: '/_next/static/',
      },
    ],
    // Link to your sitemap so Google can find it easily
    sitemap: `${baseUrl}/sitemap.xml`,
    
    // Optional: Host (if your site is hosted on a specific IP/CDN, usually not needed for Vercel/Netlify)
    // host: baseUrl,
  }
}