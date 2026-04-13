import React from 'react'
import { Users, ExternalLink, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Partners - Cross Cart Global | Strategic Partnerships",
  description: "Cross Cart Global partners with DHL, FedEx, UPS, Aramex and more for global coverage. Strong partnerships for reliable shipping services.",
  keywords: ["cross cart partners", "DHL partner", "FedEx partner", "logistics partnerships Bangladesh"],
}

const PARTNERS = [
  { name: "DHL Express", type: "Logistics Partner", color: "#FFCC00" },
  { name: "FedEx", type: "Logistics Partner", color: "#4D148C" },
  { name: "UPS", type: "Logistics Partner", color: "#351C15" },
  { name: "Aramex", type: "Regional Partner", color: "#ED1C24" },
  { name: "Bangladesh Bank", type: "Financial Partner", color: "#006A4E" },
  { name: "bKash", type: "Payment Partner", color: "#E2136B" },
  { name: "Nagad", type: "Payment Partner", color: "#FF4800" },
  { name: "SAIF", type: "Logistics Partner", color: "#1A73E8" },
]

export default function OurPartnersPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Users className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Strategic Alliances</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F5B400]">Partners</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide you with the best shipping 
            experience and widest global coverage.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="bg-white/5 border border-gray-200 rounded-2xl p-6 text-center hover:border-[#F5B400]/30 transition-all group"
            >
              <div
                className="h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold"
                style={{ 
                  backgroundColor: `${partner.color}20`, 
                  color: partner.color,
                  border: `2px solid ${partner.color}40`
                }}
              >
                {partner.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="text-gray-900 font-bold mb-1">{partner.name}</h3>
              <p className="text-gray-900/40 text-sm">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* Become Partner CTA */}
        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 text-center">
          <Award className="h-12 w-12 text-[#F5B400] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Become Our Partner</h2>
          <p className="text-gray-900/50 mb-6 max-w-2xl mx-auto">
            Interested in partnering with Cross Cart Global? We welcome collaborations with 
            businesses that share our commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:partnerships@crosscart.com"
              className="px-6 py-3 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl hover:bg-[#F5B400]/90 transition-all inline-flex items-center gap-2"
            >
              partnerships@crosscart.com
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="tel:+8801410144466"
              className="px-6 py-3 bg-white/5 border border-gray-200 text-gray-900 rounded-xl hover:bg-white/10 transition-all"
            >
              Call: +880 1410-144466
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
