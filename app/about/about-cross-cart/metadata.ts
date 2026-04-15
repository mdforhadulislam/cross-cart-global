import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cross Cart | Our Story & Mission",
  description: "Learn about Cross Cart Global - our mission, vision, and commitment to providing world-class international courier and logistics services from Bangladesh. Discover our journey and values.",
  keywords: [
    "about Cross Cart Global",
    "Cross Cart Bangladesh company",
    "international courier company Bangladesh",
    "Cross Cart history",
    "logistics company mission",
    "courier service Bangladesh",
    "Cross Cart vision",
    "global shipping company",
    "Cross Cart team",
    "our story logistics",
  ],
  openGraph: {
    title: "About Cross Cart Global | Our Story",
    description: "Discover Cross Cart Global's mission to provide world-class international courier and logistics services from Bangladesh.",
    url: "https://crosscartbd.com/about/about-cross-cart",
    type: "website",
    images: [
      {
        url: "/cover-4.png",
        width: 1200,
        height: 630,
        alt: "About Cross Cart Global",
      },
    ],
  },
  twitter: {
    title: "About Cross Cart Global",
    description: "Learn about Cross Cart Global's mission and commitment to excellent logistics services.",
    images: ["/cover-4.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
