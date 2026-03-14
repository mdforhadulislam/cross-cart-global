import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import Script from "next/script"
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

/* ======================================================
   FONT SETUP
====================================================== */
const keaniaOne = Keania_One({
  subsets: ["latin"],
  variable: "--font-keania-one",
  weight: "400",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://crosscartbangladesh.com"),

  title: {
    default: "Cross Cart Bangladesh | International Courier & Logistics Services",
    template: "%s | Cross Cart Bangladesh",
  },

  description:
    "Cross Cart Bangladesh provides international courier, air freight, sea freight, eCommerce logistics, parcel tracking, and cross-border delivery services from Bangladesh to India, China, USA, UK, Canada, Europe, Australia, Malaysia, and worldwide.",

  applicationName: "Cross Cart Bangladesh",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Cross Cart Bangladesh",
    "courier service Bangladesh",
    "international courier Bangladesh",
    "Bangladesh to India courier",
    "China to Bangladesh shipping",
    "air freight Bangladesh",
    "sea freight Bangladesh",
    "parcel tracking Bangladesh",
    "worldwide courier service",
    "ecommerce logistics Bangladesh",
    "international parcel delivery",
    "freight forwarding Bangladesh",
    "cross border delivery Bangladesh",
    "Bangladesh logistics company",
  ],

  authors: [
    {
      name: "Cross Cart Bangladesh",
      url: "https://crosscartbangladesh.com",
    },
  ],

  creator: "Cross Cart Bangladesh",
  publisher: "Cross Cart Bangladesh",
  category: "Logistics",

  alternates: {
    canonical: "https://crosscartbangladesh.com",
    languages: {
      "en-US": "https://crosscartbangladesh.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crosscartbangladesh.com",
    siteName: "Cross Cart Bangladesh",
    title: "Cross Cart Bangladesh | International Courier & Logistics Services",
    description:
      "Reliable international courier, parcel tracking, and logistics solutions from Bangladesh to worldwide destinations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cross Cart Bangladesh - International Courier & Logistics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cross Cart Bangladesh | International Courier & Logistics Services",
    description:
      "Fast, secure, and reliable courier and logistics solutions from Bangladesh to worldwide destinations.",
    images: ["/og-image.jpg"],
    creator: "@crosscartbd",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },

  other: {
    "theme-color": "#0B2A4A",
    "color-scheme": "light",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cross Cart Bangladesh",
  url: "https://crosscartbangladesh.com",
  logo: "https://crosscartbangladesh.com/logo.png",
  sameAs: [
    "https://www.facebook.com/crosscartbangladesh",
    "https://www.instagram.com/crosscartbangladesh",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+8801XXXXXXXXX",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cross Cart Bangladesh",
  url: "https://crosscartbangladesh.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://crosscartbangladesh.com/track?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` ${keaniaOne.variable} ${keaniaOne.variable} antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <TooltipProvider>
          <main className="min-h-screen">
            <NavBar />
            {children}</main>
         
        </TooltipProvider>
      </body>
    </html>
  )
}

