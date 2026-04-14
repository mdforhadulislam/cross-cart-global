import FacebookPixel from "@/components/FacebookPixel";
import FooterBar from "@/components/layout/FooterBar";
import NavBar from "@/components/layout/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
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
    "Cross Cart Global International Express Courier - Bangladesh to India courier",
    "Cross Cart Global International Express Courier - China to Bangladesh shipping",
    "Cross Cart Global International Express Courier - air freight",
    "Cross Cart Global International Express Courier - sea freight",
    "Cross Cart Global International Express Courier - parcel tracking",
    "Cross Cart Global International Express Courier - worldwide courier service",
    "Cross Cart Global International Express Courier - ecommerce logistics ",
    "Cross Cart Global International Express Courier - international parcel delivery",
    "Cross Cart Global International Express Courier - freight forwarding ",
    "Cross Cart Global International Express Courier - cross border delivery ",
    "Cross Cart Global International Express Courier - Global logistics company",
    "Cross Cart Global International Express Courier - international shipping",
    "Cross Cart Global International Express Courier - affordable shipping",
    "Cross Cart Global International Express Courier - global shipping solutions",
    "Cross Cart Global International Express Courier - air freight",
    "Cross Cart Global International Express Courier - sea freight",
    "Cross Cart Global International Express Courier - ocean freight",
    "Cross Cart Global International Express Courier - express delivery",
    "Cross Cart Global International Express Courier - courier services",
    "Cross Cart Global International Express Courier - parcel tracking",
    "Cross Cart Global International Express Courier - DHL shipping",
    "Cross Cart Global International Express Courier - FedEx rates",
    "Cross Cart Global International Express Courier - UPS express",
    "Cross Cart Global International Express Courier - international logistics",
    "Cross Cart Global International Express Courier - cargo services",
    "Cross Cart Global International Express Courier - supply chain solutions",
    "Cross Cart Global International Express Courier - export shipping",
    "Cross Cart Global International Express Courier - import export logistics",
    "Cross Cart Global International Express Courier - customs clearance",
    "Cross Cart Global International Express Courier - freight forwarding",
    "Cross Cart Global International Express Courier - door-to-door delivery",
    "Cross Cart Global International Express Courier - same-day shipping",
    "Cross Cart Global International Express Courier - economy shipping",
    "Cross Cart Global International Express Courier - Surat courier services",
    "Cross Cart Global International Express Courier - Surat logistics provider",
    "Cross Cart Global International Express Courier - fast international delivery",
    "Cross Cart Global International Express Courier - overseas shipping",
    "Cross Cart Global International Express Courier - shipping companies in India",
    "Cross Cart Global International Express Courier - cargo insurance",
    "Cross Cart Global International Express Courier - real-time tracking",
    "Cross Cart Global International Express Courier - best air freight rates",
    "Cross Cart Global International Express Courier - custom clearance",
    "Cross Cart Global International Express Courier - export rates",
    "Cross Cart Global International Express Courier - courier services in Surat",
    "Cross Cart Global International Express Courier - DHL rates comparison",
    "Cross Cart Global International Express Courier - FedEx shipping quotes",
    "Cross Cart Global International Express Courier - UPS shipping options",
    "Cross Cart Global International Express Courier - professional shipping solutions",
    "Cross Cart Global International Express Courier - global shipping services",
    "Cross Cart Global International Express Courier - Surat export company",
    "Cross Cart Global International Express Courier - Surat air cargo",
    "Cross Cart Global International Express Courier - Surat sea freight",
    "Cross Cart Global International Express Courier - Surat courier tracking",
    "Cross Cart Global International Express Courier - express international shipping",
    "Cross Cart Global International Express Courier - premium courier services",
    "Cross Cart Global International Express Courier - trusted shipping partner",
    "Cross Cart Global International Express Courier - international order fulfillment",
    "Cross Cart Global International Express Courier - logistics automation",
    "Cross Cart Global International Express Courier - customs brokerage",
    "Cross Cart Global International Express Courier - bonded warehouse",
    "Cross Cart Global International Express Courier - temperature-controlled shipping",
    "Cross Cart Global International Express Courier - white-glove delivery",
    "Cross Cart Global International Express Courier - commercial import export",
    "Cross Cart Global International Express Courier - express parcel services",
    "Cross Cart Global International Express Courier - import-export documentation",
    "Cross Cart Global International Express Courier - global trade compliance",
    "Cross Cart Global International Express Courier - HS code classification",
    "Cross Cart Global International Express Courier - certified freight forwarding",
    "Cross Cart Global International Express Courier - worldwide transport solutions",
    "Cross Cart Global International Express Courier - global e-commerce fulfillment",
    "Cross Cart Global International Express Courier - Surat logistics hub",
    "Cross Cart Global International Express Courier - Surat freight forwarding",
    "Cross Cart Global International Express Courier - Surat business shipping",
    "Cross Cart Global International Express Courier - Surat cargo handling",
    "Cross Cart Global International Express Courier - Surat international trade",
    "Cross Cart Global International Express Courier - freight network",
    "Cross Cart Global International Express Courier tracking",
    "Cross Cart Global International Express Courier courier",
    "Cross Cart Global International Express Courier parcel tracking",
    "Cross Cart Global International Express Courier shipment tracking",
    "Cross Cart Global International Express Courier freight services",
    "Cross Cart Global International Express Courier shipping solutions",
    "Cross Cart Global International Express Courier export services",
    "Cross Cart Global International Express Courier cargo solutions",
    "Cross Cart Global International Express Courier logistics provider",
    "Cross Cart Global International Express Courier warehouse solutions",
    "Cross Cart Global International Express Courier air cargo",
    "Cross Cart Global International Express Courier ocean freight",
    "Cross Cart Global International Express Courier customs clearance",
    "Cross Cart Global International Express Courier supply chain management",
    "Cross Cart Global International Express Courier global delivery",
    "Cross Cart Global International Express Courier B2B shipping",
    "Cross Cart Global International Express Courier e-commerce logistics",
    "Cross Cart Global International Express Courier door-to-door services",
    "Cross Cart Global International Express Courier trade compliance",
    "Cross Cart Global International Express Courier import-export services",
    "Cross Cart Global International Express Courier cross-border shipping",
    "Cross Cart Global International Express Courier international freight forwarding",
    "Cross Cart Global International Express Courier commercial shipping",
    "Cross Cart Global International Express Courier real-time tracking",
    "Cross Cart Global International Express Courier logistics automation",
    "Cross Cart Global International Express Courier bonded warehouse",
    "Cross Cart Global International Express Courier last-mile delivery",
    "Cross Cart Global International Express Courier temperature-controlled freight",
    "Cross Cart Global International Express Courier custom brokerage",
    "Cross Cart Global International Express Courier heavy freight solutions",
    "Cross Cart Global International Express Courier cargo insurance",
    "Cross Cart Global International Express Courier certified logistics",
    "Cross Cart Global International Express Courier multimodal shipping",
    "Cross Cart Global International Express Courier global supply chain",
    "Cross Cart Global International Express Courier duty-free shipping",
    "Cross Cart Global International Express Courier premium courier",
    "Cross Cart Global International Express Courier economy shipping",
    "Cross Cart Global International Express Courier same-day freight",
    "Cross Cart Global International Express Courier bulk shipping",
    "Cross Cart Global International Express Courier B2B freight",
    "Cross Cart Global International Express Courier global trade compliance",
    "Cross Cart Global International Express Courier trade documentation",
    "Cross Cart Global International Express Courier port-to-port shipping",
    "Cross Cart Global International Express Courier customs handling",
    "Cross Cart Global International Express Courier global express",
    "Cross Cart Global International Express Courier import duty solutions",
    "Cross Cart Global International Express Courier warehouse storage",
    "Cross Cart Global International Express Courier e-commerce order fulfillment",
    "Cross Cart Global International Express Courier commercial cargo",
    "Cross Cart Global International Express Courier competitive freight rates",
    "Cross Cart Global International Express Courier trusted logistics",
    "Cross Cart Global International Express Courier import-export trade",
    "Cross Cart Global International Express Courier international retail shipping",
    "Cross Cart Global International Express Courier express parcel services",
    "Cross Cart Global International Express Courier certified freight forwarding",
    "Cross Cart Global International Express Courier global transport solutions",
    "Cross Cart Global International Express Courier bonded logistics",
    "Cross Cart Global International Express Courier multimodal transport",
    "Cross Cart Global International Express Courier specialized freight solutions",
    "Cross Cart Global International Express Courier temperature-controlled storage",
    "Cross Cart Global International Express Courier white-glove shipping",
    "Cross Cart Global International Express Courier customs processing",
    "Cross Cart Global International Express Courier overseas warehousing",
    "Cross Cart Global International Express Courier international cargo tracking",
    "Cross Cart Global International Express Courier high-value shipment",
    "Cross Cart Global International Express Courier international supplier logistics",
    "Cross Cart Global International Express Courier product fulfillment",
    "Cross Cart Global International Express Courier regulatory compliance",
    "Cross Cart Global International Express Courier import logistics",
    "Cross Cart Global International Express Courier cargo warehousing",
    "Cross Cart Global International Express Courier freight cost reduction",
    "Cross Cart Global International Express Courier cargo packaging",
    "Cross Cart Global International Express Courier goods handling",
    "Cross Cart Global International Express Courier product distribution",
    "Cross Cart Global International Express Courier customs inspection",
    "Cross Cart Global International Express Courier global network",
    "Cross Cart Global International Express Courier time-critical freight",
    "Cross Cart Global International Express Courier secure shipping",
    "Cross Cart Global International Express Courier air cargo security",
    "Cross Cart Global International Express Courier corporate shipping",
    "Cross Cart Global International Express Courier fulfillment center",
    "Cross Cart Global International Express Courier on-demand shipping",
    "Cross Cart Global International Express Courier just-in-time logistics",
    "Cross Cart Global International Express Courier warehousing solutions",
    "Cross Cart Global International Express Courier cargo transport management",
    "Cross Cart Global International Express Courier freight consolidation",
    "Cross Cart Global International Express Courier distribution channels",
    "Cross Cart Global International Express Courier logistics partner",
    "Cross Cart Global International Express Courier service quality",
    "Cross Cart Global International Express Courier express freight solutions",
    "Cross Cart Global International Express Courier digital freight forwarding",
    "Cross Cart Global International Express Courier freight brokerage services",
    "Cross Cart Global International Express Courier procurement logistics",
    "Cross Cart Global International Express Courier digital shipping tracking",
    "Cross Cart Global International Express Courier advanced logistics solutions",
    "Cross Cart Global International Express Courier international trade support",
    "Cross Cart Global International Express Courier shipping carrier comparison",
    "Cross Cart Global International Express Courier certified customs broker",
    "Cross Cart Global International Express Courier global import network",
    "Cross Cart Global International Express Courier customs solutions",
    "Cross Cart Global International Express Courier smart logistics",
    "Cross Cart Global International Express Courier cargo insurance coverage",
    "Cross Cart Global International Express Courier priority freight services",
    "Cross Cart Global International Express Courier bulk order shipping",
    "Cross Cart Global International Express Courier fulfillment logistics",
    "Cross Cart Global International Express Courier cargo safety",
    "Cross Cart Global International Express Courier optimized supply chain",
    "Cross Cart Global International Express Courier global freight network",
    "Cross Cart Global International Express Courier warehouse management",
    "Cross Cart Global International Express Courier courier cost analysis",
    "Cross Cart Global International Express Courier cost-efficient shipping",
    "Cross Cart Global International Express Courier advanced freight solutions",
    "Cross Cart Global International Express Courier risk-free cargo shipping",
    "Cross Cart Global International Express Courier regulated goods shipping",
    "Cross Cart Global International Express Courier temperature-sensitive freight",
    "Cross Cart Global International Express Courier wholesale logistics",
    "Cross Cart Global International Express Courier order tracking",
    "Cross Cart Global International Express Courier high-speed courier services",
    "Cross Cart Global International Express Courier tailored shipping solutions",
    "Cross Cart Global International Express Courier express warehousing",
    "Cross Cart Global International Express Courier secure freight transport",
    "Cross Cart Global International Express Courier air cargo logistics",
    "Cross Cart Global International Express Courier bonded freight",
    "Cross Cart Global International Express Courier special cargo handling",
    "Cross Cart Global International Express Courier expert freight solutions",
    "Cross Cart Global International Express Courier global logistics network",
    "Cross Cart Global International Express Courier intermodal freight",
    "Cross Cart Global International Express Courier warehousing efficiency",
    "Cross Cart Global International Express Courier streamlined shipping",
    "Cross Cart Global International Express Courier last-mile logistics",
    "Cross Cart Global International Express Courier cargo protection",
    "Cross Cart Global International Express Courier air express freight",
    "Cross Cart Global International Express Courier contract logistics",
    "Cross Cart Global International Express Courier professional courier services",
    "Cross Cart Global International Express Courier optimized transport routes",
    "Cross Cart Global International Express Courier freight cost comparison",
    "Cross Cart Global International Express Courier import-export carrier",
    "Cross Cart Global International Express Courier logistics advisory",
    "Cross Cart Global International Express Courier supply chain data analytics",
    "Cross Cart Global International Express Courier e-commerce supply chain",
    "Cross Cart Global International Express Courier international trade logistics",
    "Cross Cart Global International Express Courier retail supply chain solutions",
    "Cross Cart Global International Express Courier cargo storage solutions",
    "Cross Cart Global International Express Courier time-sensitive cargo shipping",
    "Cross Cart Global International Express Courier automated logistics",
    "Cross Cart Global International Express Courier customs trade facilitation",
    "Cross Cart Global International Express Courier freight documentation support",
    "Cross Cart Global International Express Courier B2C logistics solutions",
    "Cross Cart Global International Express Courier competitive express services",
    "Cross Cart Global International Express Courier international business logistics",
    "Cross Cart Global International Express Courier Shipment Tracking",
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
    images: ["/logo.png"],
    creator: "@crosscartbd",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/full-logo.png", sizes: "180x180", type: "image/png" }],
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
      <head>
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
          <FacebookPixel />
          <main className="min-h-screen">
            <NavBar />
            <div className="h-16.25"></div>
            {children}
            <FooterBar />
            <Analytics />
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
