import React from 'react'
import { Globe, Package, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | Cross Cart Global",
  description: "Learn about Cross Cart Global - your trusted partner for international courier, logistics, and shipping solutions. 15+ years experience, 220+ countries served, 50K+ packages delivered with 99% customer satisfaction.",
  keywords: [
    "Cross Cart Global about",
    "courier company Bangladesh",
    "international logistics company Bangladesh",
    "shipping company Dhaka",
    "about Cross Cart",
    "logistics company Bangladesh",
    "courier service about us",
    "Cross Cart history",
    "Bangladesh courier company",
    "global logistics partner Bangladesh",
    "Cross Cart mission vision",
    "international shipping company Bangladesh",
    "trusted courier Bangladesh",
    "logistics services Bangladesh",
  ],
  openGraph: {
    title: "About Cross Cart Global | International Courier & Logistics",
    description: "Learn about Cross Cart Global - your trusted partner for international courier and logistics solutions. 15+ years experience, 220+ countries served.",
    url: "https://crosscartbd.com/about",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global About",
      },
      {
        url: "/cover-1.png",
        width: 1200,
        height: 630,
        alt: "Cross Cart Global - Global Logistics Partner",
      },
    ],
  },
  twitter: {
    title: "About Cross Cart Global",
    description: "Your trusted partner for international courier and logistics solutions.",
    images: ["/cover-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATS = [
  { number: "15+", label: "Years Experience" },
  { number: "220+", label: "Countries Served" },
  { number: "50K+", label: "Packages Delivered" },
  { number: "99%", label: "Customer Satisfaction" },
]

const FEATURES = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Extensive coverage across 220+ countries and territories worldwide",
  },
  {
    icon: Shield,
    title: "Secure Shipping",
    description: "Full insurance coverage and secure packaging for all shipments",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options available",
  },
  {
    icon: CheckCircle2,
    title: "Real-time Tracking",
    description: "Track your package from pickup to delivery",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">About Cross Cart Global</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted <span className="text-[#F5B400]">Global Logistics</span> Partner
          </h1>
          <p className="text-gray-900/50 max-w-3xl mx-auto text-lg">
            Since 2009, Cross Cart Global has been delivering excellence in international courier, 
            logistics, and shipping solutions. We connect Bangladesh to the world with reliability and care.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[#F5B400] mb-2">{stat.number}</div>
              <div className="text-gray-900/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white/5 border border-gray-200 rounded-2xl p-6 hover:border-[#F5B400]/30 transition-all">
                <div className="h-14 w-14 rounded-xl bg-[#F5B400]/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-[#F5B400]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-900/50">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mission Section */}
        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-900/50 mb-4">
                To provide seamless, reliable, and cost-effective logistics solutions that empower 
                businesses and individuals to connect globally.
              </p>
              <p className="text-gray-900/50">
                We believe that great logistics shouldn&apos;t be complicated. Our team works tirelessly 
                to ensure your packages arrive safely, on time, every time.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-gray-900 font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-900/70">
                  <CheckCircle2 className="h-5 w-5 text-[#F5B400]" />
                  Competitive rates for all destinations
                </li>
                <li className="flex items-center gap-3 text-gray-900/70">
                  <CheckCircle2 className="h-5 w-5 text-[#F5B400]" />
                  24/7 customer support
                </li>
                <li className="flex items-center gap-3 text-gray-900/70">
                  <CheckCircle2 className="h-5 w-5 text-[#F5B400]" />
                  Door-to-door service
                </li>
                <li className="flex items-center gap-3 text-gray-900/70">
                  <CheckCircle2 className="h-5 w-5 text-[#F5B400]" />
                  Customs clearance assistance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship?</h2>
          <p className="text-gray-900/50 mb-6">Get an instant quote for your international shipment</p>
          <Link href="/price" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] font-bold rounded-xl transition-all">
            Get Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
