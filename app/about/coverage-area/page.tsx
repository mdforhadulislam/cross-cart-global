import React from 'react'
import { Globe, MapPin, Plane, Package } from 'lucide-react'

const COUNTRIES = [
  { name: "India", flag: "🇮🇳", code: "IN" },
  { name: "China", flag: "🇨🇳", code: "CN" },
  { name: "USA", flag: "🇺🇸", code: "US" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
  { name: "UAE", flag: "🇦🇪", code: "AE" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY" },
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "Germany", flag: "🇩🇪", code: "DE" },
  { name: "Singapore", flag: "🇸🇬", code: "SG" },
  { name: "Japan", flag: "🇯🇵", code: "JP" },
  { name: "South Korea", flag: "🇰🇷", code: "KR" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" },
  { name: "Qatar", flag: "🇶🇦", code: "QA" },
  { name: "Kuwait", flag: "🇰🇼", code: "KW" },
  { name: "Bahrain", flag: "🇧🇭", code: "BH" },
  { name: "Oman", flag: "🇴🇲", code: "OM" },
  { name: "Turkey", flag: "🇹🇷", code: "TR" },
]

export default function CoverageAreaPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Globe className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Global Network</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#F5B400]">Coverage Area</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            We deliver to 220+ countries and territories worldwide. Find your destination below.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">220+</div>
            <div className="text-white/50 text-sm">Countries</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">50K+</div>
            <div className="text-white/50 text-sm">Cities</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">24/7</div>
            <div className="text-white/50 text-sm">Support</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">48h</div>
            <div className="text-white/50 text-sm">Avg. Transit</div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Plane className="h-6 w-6 text-[#F5B400]" />
            Popular Routes from Bangladesh
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { from: "Bangladesh", to: "India", flag: "🇧🇩→🇮🇳", time: "3-5 days" },
              { from: "Bangladesh", to: "China", flag: "🇧🇩→🇨🇳", time: "5-7 days" },
              { from: "Bangladesh", to: "USA", flag: "🇧🇩→🇺🇸", time: "7-10 days" },
              { from: "Bangladesh", to: "UAE", flag: "🇧🇩→🇦🇪", time: "4-6 days" },
            ].map((route, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#F5B400]/30 transition-all">
                <div className="text-3xl mb-3">{route.flag}</div>
                <div className="text-white font-medium mb-1">{route.from} → {route.to}</div>
                <div className="text-[#F5B400] text-sm">{route.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#F5B400]" />
            Available Countries
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {COUNTRIES.map((country, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#F5B400]/30 hover:bg-[#F5B400]/5 transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="text-white text-sm font-medium">{country.name}</div>
                <div className="text-white/40 text-xs mt-1">{country.code}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-[#F5B400]/5 border border-[#F5B400]/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Package className="h-6 w-6 text-[#F5B400] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-2">Delivery Not Available?</h4>
              <p className="text-white/60 text-sm">
                If your destination is not listed, please contact our support team. 
                We{"'"}re constantly expanding our network to serve more destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
