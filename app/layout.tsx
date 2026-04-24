import FacebookPixel from "@/components/FacebookPixel";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
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
  metadataBase: new URL("https://crosscartbd.com"),

  title: {
    default: "Cross Cart Global | International Courier & Logistics Services",
    template: "%s | Cross Cart Global",
  },

  description: `Cross Cart Global is a leading international courier and logistics service provider based in Bangladesh, dedicated to delivering fast, secure, and cost-effective shipping solutions worldwide. We specialize in international courier services, air freight, sea freight, and end-to-end eCommerce logistics tailored for individuals, businesses, and online sellers.

Our services include reliable parcel delivery, real-time shipment tracking, customs clearance support, and efficient cross-border logistics management. Whether you are sending documents, commercial goods, personal packages, or bulk shipments, we ensure safe and timely delivery with full transparency at every step.

From Bangladesh, we operate global shipping routes covering major destinations including India, China, the USA, the UK, Canada, Europe, Australia, Malaysia, and many more countries. Our strong logistics network and strategic partnerships enable us to offer competitive pricing and faster transit times.

Cross Cart Global also supports eCommerce businesses with complete logistics solutions, including order fulfillment, inventory handling, and return management—helping sellers expand their reach to international markets seamlessly.

With a focus on customer satisfaction, reliability, and innovation, Cross Cart Global aims to be your trusted logistics partner for all international shipping needs.`,

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
    "international shipping",
    "affordable shipping",
    "global shipping solutions",
    "air freight",
    "sea freight",
    "ocean freight",
    "express delivery",
    "courier services",
    "parcel tracking",
    "DHL shipping",
    "FedEx rates",
    "UPS express",
    "international logistics",
    "cargo services",
    "supply chain solutions",
    "export shipping",
    "import export logistics",
    "customs clearance",
    "freight forwarding",
    "door-to-door delivery",
    "same-day shipping",
    "economy shipping",
    "Surat courier services",
    "Surat logistics provider",
    "fast international delivery",
    "overseas shipping",
    "shipping companies in India",
    "cargo insurance",
    "real-time tracking",
    "best air freight rates",
    "custom clearance",
    "export rates",
    "courier services in Surat",
    "DHL rates comparison",
    "FedEx shipping quotes",
    "UPS shipping options",
    "professional shipping solutions",
    "global shipping services",
    "Surat export company",
    "Surat air cargo",
    "Surat sea freight",
    "Surat courier tracking",
    "express international shipping",
    "premium courier services",
    "trusted shipping partner",
    "international order fulfillment",
    "logistics automation",
    "customs brokerage",
    "bonded warehouse",
    "temperature-controlled shipping",
    "white-glove delivery",
    "commercial import export",
    "express parcel services",
    "import-export documentation",
    "global trade compliance",
    "HS code classification",
    "certified freight forwarding",
    "worldwide transport solutions",
    "global e-commerce fulfillment",
    "Surat logistics hub",
    "Surat freight forwarding",
    "Surat business shipping",
    "Surat cargo handling",
    "Surat international trade",
    "freight network",
    "tracking",
    "courier",
    "parcel tracking",
    "shipment tracking",
    "freight services",
    "shipping solutions",
    "export services",
    "cargo solutions",
    "logistics provider",
    "warehouse solutions",
    "air cargo",
    "ocean freight",
    "customs clearance",
    "supply chain management",
    "global delivery",
    "B2B shipping",
    "e-commerce logistics",
    "door-to-door services",
    "trade compliance",
    "import-export services",
    "cross-border shipping",
    "international freight forwarding",
    "commercial shipping",
    "real-time tracking",
    "logistics automation",
    "bonded warehouse",
    "last-mile delivery",
    "temperature-controlled freight",
    "custom brokerage",
    "heavy freight solutions",
    "cargo insurance",
    "certified logistics",
    "multimodal shipping",
    "global supply chain",
    "duty-free shipping",
    "premium courier",
    "economy shipping",
    "same-day freight",
    "bulk shipping",
    "B2B freight",
    "global trade compliance",
    "trade documentation",
    "port-to-port shipping",
    "customs handling",
    "global express",
    "import duty solutions",
    "warehouse storage",
    "e-commerce order fulfillment",
    "commercial cargo",
    "competitive freight rates",
    "trusted logistics",
    "import-export trade",
    "international retail shipping",
    "express parcel services",
    "certified freight forwarding",
    "global transport solutions",
    "bonded logistics",
    "multimodal transport",
    "specialized freight solutions",
    "temperature-controlled storage",
    "white-glove shipping",
    "customs processing",
    "overseas warehousing",
    "international cargo tracking",
    "high-value shipment",
    "international supplier logistics",
    "product fulfillment",
    "regulatory compliance",
    "import logistics",
    "cargo warehousing",
    "freight cost reduction",
    "cargo packaging",
    "goods handling",
    "product distribution",
    "customs inspection",
    "global network",
    "time-critical freight",
    "secure shipping",
    "air cargo security",
    "corporate shipping",
    "fulfillment center",
    "on-demand shipping",
    "just-in-time logistics",
    "warehousing solutions",
    "cargo transport management",
    "freight consolidation",
    "distribution channels",
    "logistics partner",
    "service quality",
    "express freight solutions",
    "digital freight forwarding",
    "freight brokerage services",
    "procurement logistics",
    "digital shipping tracking",
    "advanced logistics solutions",
    "international trade support",
    "shipping carrier comparison",
    "certified customs broker",
    "global import network",
    "customs solutions",
    "smart logistics",
    "cargo insurance coverage",
    "priority freight services",
    "bulk order shipping",
    "fulfillment logistics",
    "cargo safety",
    "optimized supply chain",
    "global freight network",
    "warehouse management",
    "courier cost analysis",
    "cost-efficient shipping",
    "advanced freight solutions",
    "risk-free cargo shipping",
    "regulated goods shipping",
    "temperature-sensitive freight",
    "wholesale logistics",
    "order tracking",
    "high-speed courier services",
    "tailored shipping solutions",
    "express warehousing",
    "secure freight transport",
    "air cargo logistics",
    "bonded freight",
    "special cargo handling",
    "expert freight solutions",
    "global logistics network",
    "intermodal freight",
    "warehousing efficiency",
    "streamlined shipping",
    "last-mile logistics",
    "cargo protection",
    "air express freight",
    "contract logistics",
    "professional courier services",
    "optimized transport routes",
    "freight cost comparison",
    "import-export carrier",
    "logistics advisory",
    "supply chain data analytics",
    "e-commerce supply chain",
    "international trade logistics",
    "retail supply chain solutions",
    "cargo storage solutions",
    "time-sensitive cargo shipping",
    "automated logistics",
    "customs trade facilitation",
    "freight documentation support",
    "B2C logistics solutions",
    "competitive express services",
    "international business logistics",
    "Shipment Tracking",
    "Cross Cart Global International Express Courier",
  ],
  authors: [
    {
      name: "Cross Cart Global",
      url: "https://crosscartbd.com",
    },
  ],
  creator: "Cross Cart Global",
  publisher: "Cross Cart Global",
  category: "Logistics, Courier Service, International Shipping, E-commerce Logistics, Freight Forwarding",

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
    description: `Cross Cart Global is a leading international courier and logistics service provider based in Bangladesh, dedicated to delivering fast, secure, and cost-effective shipping solutions worldwide. We specialize in international courier services, air freight, sea freight, and end-to-end eCommerce logistics tailored for individuals, businesses, and online sellers.

Our services include reliable parcel delivery, real-time shipment tracking, customs clearance support, and efficient cross-border logistics management. Whether you are sending documents, commercial goods, personal packages, or bulk shipments, we ensure safe and timely delivery with full transparency at every step.

From Bangladesh, we operate global shipping routes covering major destinations including India, China, the USA, the UK, Canada, Europe, Australia, Malaysia, and many more countries. Our strong logistics network and strategic partnerships enable us to offer competitive pricing and faster transit times.

Cross Cart Global also supports eCommerce businesses with complete logistics solutions, including order fulfillment, inventory handling, and return management—helping sellers expand their reach to international markets seamlessly.

With a focus on customer satisfaction, reliability, and innovation, Cross Cart Global aims to be your trusted logistics partner for all international shipping needs.`,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - International Courier & Logistics",
      },
      {
        url: "/cover-1.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Fast and Reliable Shipping Solutions",
      },
      {
        url: "/cover-2.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Global Shipping Services",
      },
      {
        url: "/cover-3.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - eCommerce Logistics Solutions",
      },
      {
        url: "/cover-4.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Real-Time Shipment Tracking",
      },
      {
        url: "/cover-5.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Air and Sea Freight Services",
      },
      {
        url: "/cover-6.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - International Courier from Bangladesh",
      },
      {
        url: "/cover-7.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Competitive Shipping Rates",
      },
      {
        url: "/cover-8.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Trusted Logistics Partner",
      },
      {
        url: "/cover-9.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Comprehensive Shipping Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cross Cart Global | International Courier & Logistics Services",
    description: `Cross Cart Global is a leading international courier and logistics service provider based in Bangladesh, dedicated to delivering fast, secure, and cost-effective shipping solutions worldwide. We specialize in international courier services, air freight, sea freight, and end-to-end eCommerce logistics tailored for individuals, businesses, and online sellers.

Our services include reliable parcel delivery, real-time shipment tracking, customs clearance support, and efficient cross-border logistics management. Whether you are sending documents, commercial goods, personal packages, or bulk shipments, we ensure safe and timely delivery with full transparency at every step.

From Bangladesh, we operate global shipping routes covering major destinations including India, China, the USA, the UK, Canada, Europe, Australia, Malaysia, and many more countries. Our strong logistics network and strategic partnerships enable us to offer competitive pricing and faster transit times.

Cross Cart Global also supports eCommerce businesses with complete logistics solutions, including order fulfillment, inventory handling, and return management—helping sellers expand their reach to international markets seamlessly.

With a focus on customer satisfaction, reliability, and innovation, Cross Cart Global aims to be your trusted logistics partner for all international shipping needs.`,
    images: [
      "/cover-1.png",
      "/cover-2.png",
      "/cover-3.png",
      "/cover-4.png",
      "/cover-5.png",
      "/cover-6.png",
      "/cover-7.png",
      "/cover-8.png",
      "/cover-9.png",
    ],
    creator: "@crosscartbd",
  },

  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/logo.png"],
  },
  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#0B2A4A",
    "color-scheme": "light",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cross Cart Global International Express Courier",
  url: "https://crosscartbd.com",
  logo: "https://crosscartbd.com/logo.png",
  sameAs: [
    "https://www.facebook.com/cross.cart.global.bd",
    "https://www.instagram.com/crosscart.global",
    "https://www.linkedin.com/company/cross-cart-global",
    "https://twitter.com/crosscartglobal",
    "https://www.youtube.com/@crosscartglobal",
    "https://www.tiktok.com/@crosscartglobal",
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
      <head>
        <Script
          id="facebook-pixel"
          strategy="lazyOnload" // 🔥 better than afterInteractive
        >
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '26093014930391502');
  `}
        </Script>
        {/* Microsoft Clarity tracking script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w8fn60boix");
            `,
          }}
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBRH1VJHZP"
          strategy="afterInteractive"
        />

        {/* Google Analytics Init */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MBRH1VJHZP');
          `}
        </Script>

        <meta name="msvalidate.01" content="5E9033E01DB54C7DBC289D821074568A" />
      </head>

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
          <Suspense fallback={null}>
            <FacebookPixel />
          </Suspense>
          <main className="min-h-screen">
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <Analytics />
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
