import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Cross Cart Global",
  description: "Explore Cross Cart Global's comprehensive range of services - international shipping, express delivery, air freight, sea freight, customs clearance, warehousing, bulk shipping, and parcel tracking for all your logistics needs.",
  keywords: [
    "Cross Cart services",
    "courier services Bangladesh",
    "logistics services",
    "international shipping service",
    "express delivery Bangladesh",
    "air freight Bangladesh",
    "sea freight Bangladesh",
    "customs clearance service",
    "warehousing Bangladesh",
    "bulk shipping Bangladesh",
    "parcel tracking service",
    "freight forwarding Bangladesh",
    "cargo services Bangladesh",
    "door to door delivery",
    "eCommerce logistics Bangladesh",
  ],
  openGraph: {
    title: "Our Services | Cross Cart Global",
    description: "Explore our comprehensive range of services - international shipping, express delivery, air freight, sea freight, customs clearance, warehousing, and more.",
    url: "https://crosscartbd.com/services",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global Services",
      },
      {
        url: "/cover-1.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global Logistics Services",
      },
    ],
  },
  twitter: {
    title: "Cross Cart Global Services",
    description: "Comprehensive logistics and shipping services for all your needs.",
    images: ["/cover-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
