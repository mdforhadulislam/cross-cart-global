import FooterBar from "@/components/layout/FooterBar";
import NavBar from "@/components/layout/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    default:
      "Cross Cart Global | International Courier & Logistics Services",
    template: "%s | Cross Cart Global",
  },

  description:
    "Cross Cart Global provides international courier, air freight, sea freight, eCommerce logistics, parcel tracking, and cross-border delivery services from Bangladesh to India, China, USA, UK, Canada, Europe, Australia, Malaysia, and worldwide.",

  applicationName: "Cross Cart Global",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Cross Cart Global",
    "courier service Global",
    "international courier Bangladesh",
    "Bangladesh to India courier",
    "China to Bangladesh shipping",
    "air freight",
    "sea freight",
    "parcel tracking",
    "worldwide courier service",
    "ecommerce logistics ",
    "international parcel delivery",
    "freight forwarding ",
    "cross border delivery ",
    "Global logistics company",
  ],
  authors: [
    {
      name: "Cross Cart Global",
      url: "https://crosscartbd.com",
    },
  ],
  creator: "Cross Cart Global",
  publisher: "Cross Cart Global",
  category: "Logistics",

  alternates: {
    canonical: "https://crosscartbd.com",
    languages: {
      "en-US": "https://crosscartbd.com",
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
    url: "https://crosscartbd.com",
    siteName: "Cross Cart Global",
    title: "Cross Cart Global | International Courier & Logistics Services",
    description:
      "Reliable international courier, parcel tracking, and logistics solutions from Bangladesh to worldwide destinations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - International Courier & Logistics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cross Cart Global | International Courier & Logistics Services",
    description:
      "Fast, secure, and reliable courier and logistics solutions from Bangladesh to worldwide destinations.",
    images: ["/og-image.jpg"],
    creator: "@crosscartbd",
  },

  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/full-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
  other: {
    "theme-color": "#0B2A4A",
    "color-scheme": "light",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cross Cart Global",
  url: "https://crosscartbd.com",
  logo: "https://crosscartbd.com/logo.png",
  sameAs: [
    "https://www.facebook.com/cross.cart.global.bd",
    "https://www.instagram.com/crosscart.global",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+8801410-144466",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cross Cart Global",
  url: "https://crosscartbd.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://crosscartbd.com/track?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${keaniaOne.variable} ${keaniaOne.variable} antialiased`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <TooltipProvider>
          <main className="min-h-screen">
            <NavBar />
            <div className="h-16.25"></div>
            {children}
            <FooterBar />
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}

