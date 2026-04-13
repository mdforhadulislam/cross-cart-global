"use client"

import React, { useState } from 'react'
import { Globe, MapPin, Plane, Package, Search } from 'lucide-react'

const COUNTRIES = [
  // Asia
  { name: "Afghanistan", flag: "🇦🇫", code: "AF" },
  { name: "Armenia", flag: "🇦🇲", code: "AM" },
  { name: "Azerbaijan", flag: "🇦🇿", code: "AZ" },
  { name: "Bahrain", flag: "🇧🇭", code: "BH" },
  { name: "Bangladesh", flag: "🇧🇩", code: "BD" },
  { name: "Bhutan", flag: "🇧🇹", code: "BT" },
  { name: "Brunei", flag: "🇧🇳", code: "BN" },
  { name: "Cambodia", flag: "🇰🇭", code: "KH" },
  { name: "China", flag: "🇨🇳", code: "CN" },
  { name: "Cyprus", flag: "🇨🇾", code: "CY" },
  { name: "Georgia", flag: "🇬🇪", code: "GE" },
  { name: "India", flag: "🇮🇳", code: "IN" },
  { name: "Indonesia", flag: "🇮🇩", code: "ID" },
  { name: "Iran", flag: "🇮🇷", code: "IR" },
  { name: "Iraq", flag: "🇮🇶", code: "IQ" },
  { name: "Israel", flag: "🇮🇱", code: "IL" },
  { name: "Japan", flag: "🇯🇵", code: "JP" },
  { name: "Jordan", flag: "🇯🇴", code: "JO" },
  { name: "Kazakhstan", flag: "🇰🇿", code: "KZ" },
  { name: "Kuwait", flag: "🇰🇼", code: "KW" },
  { name: "Kyrgyzstan", flag: "🇰🇬", code: "KG" },
  { name: "Laos", flag: "🇱🇦", code: "LA" },
  { name: "Lebanon", flag: "🇱🇧", code: "LB" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY" },
  { name: "Maldives", flag: "🇲🇻", code: "MV" },
  { name: "Mongolia", flag: "🇲🇳", code: "MN" },
  { name: "Myanmar", flag: "🇲🇲", code: "MM" },
  { name: "Nepal", flag: "🇳🇵", code: "NP" },
  { name: "North Korea", flag: "🇰🇵", code: "KP" },
  { name: "Oman", flag: "🇴🇲", code: "OM" },
  { name: "Pakistan", flag: "🇵🇰", code: "PK" },
  { name: "Palestine", flag: "🇵🇸", code: "PS" },
  { name: "Philippines", flag: "🇵🇭", code: "PH" },
  { name: "Qatar", flag: "🇶🇦", code: "QA" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" },
  { name: "Singapore", flag: "🇸🇬", code: "SG" },
  { name: "South Korea", flag: "🇰🇷", code: "KR" },
  { name: "Sri Lanka", flag: "🇱🇰", code: "LK" },
  { name: "Syria", flag: "🇸🇾", code: "SY" },
  { name: "Taiwan", flag: "🇹🇼", code: "TW" },
  { name: "Tajikistan", flag: "🇹🇯", code: "TJ" },
  { name: "Thailand", flag: "🇹🇭", code: "TH" },
  { name: "Timor-Leste", flag: "🇹🇱", code: "TL" },
  { name: "Turkey", flag: "🇹🇷", code: "TR" },
  { name: "Turkmenistan", flag: "🇹🇲", code: "TM" },
  { name: "UAE", flag: "🇦🇪", code: "AE" },
  { name: "Uzbekistan", flag: "🇺🇿", code: "UZ" },
  { name: "Vietnam", flag: "🇻🇳", code: "VN" },
  { name: "Yemen", flag: "🇾🇪", code: "YE" },
  // Europe
  { name: "Albania", flag: "🇦🇱", code: "AL" },
  { name: "Austria", flag: "🇦🇹", code: "AT" },
  { name: "Belarus", flag: "🇧🇾", code: "BY" },
  { name: "Belgium", flag: "🇧🇪", code: "BE" },
  { name: "Bosnia", flag: "🇧🇦", code: "BA" },
  { name: "Bulgaria", flag: "🇧🇬", code: "BG" },
  { name: "Croatia", flag: "🇭🇷", code: "HR" },
  { name: "Czech Republic", flag: "🇨🇿", code: "CZ" },
  { name: "Denmark", flag: "🇩🇰", code: "DK" },
  { name: "Estonia", flag: "🇪🇪", code: "EE" },
  { name: "Finland", flag: "🇫🇮", code: "FI" },
  { name: "France", flag: "🇫🇷", code: "FR" },
  { name: "Germany", flag: "🇩🇪", code: "DE" },
  { name: "Greece", flag: "🇬🇷", code: "GR" },
  { name: "Hungary", flag: "🇭🇺", code: "HU" },
  { name: "Iceland", flag: "🇮🇸", code: "IS" },
  { name: "Ireland", flag: "🇮🇪", code: "IE" },
  { name: "Italy", flag: "🇮🇹", code: "IT" },
  { name: "Latvia", flag: "🇱🇻", code: "LV" },
  { name: "Lithuania", flag: "🇱🇹", code: "LT" },
  { name: "Netherlands", flag: "🇳🇱", code: "NL" },
  { name: "Norway", flag: "🇳🇴", code: "NO" },
  { name: "Poland", flag: "🇵🇱", code: "PL" },
  { name: "Portugal", flag: "🇵🇹", code: "PT" },
  { name: "Romania", flag: "🇷🇴", code: "RO" },
  { name: "Russia", flag: "🇷🇺", code: "RU" },
  { name: "Serbia", flag: "🇷🇸", code: "RS" },
  { name: "Slovakia", flag: "🇸🇰", code: "SK" },
  { name: "Slovenia", flag: "🇸🇮", code: "SI" },
  { name: "Spain", flag: "🇪🇸", code: "ES" },
  { name: "Sweden", flag: "🇸🇪", code: "SE" },
  { name: "Switzerland", flag: "🇨🇭", code: "CH" },
  { name: "Ukraine", flag: "🇺🇦", code: "UA" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
  // Africa
  { name: "Egypt", flag: "🇪🇬", code: "EG" },
  { name: "Kenya", flag: "🇰🇪", code: "KE" },
  { name: "Nigeria", flag: "🇳🇬", code: "NG" },
  { name: "South Africa", flag: "🇿🇦", code: "ZA" },
  { name: "Morocco", flag: "🇲🇦", code: "MA" },
  { name: "Ghana", flag: "🇬🇭", code: "GH" },
  { name: "Tanzania", flag: "🇹🇿", code: "TZ" },
  { name: "Ethiopia", flag: "🇪🇹", code: "ET" },
  // North America
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "USA", flag: "🇺🇸", code: "US" },
  { name: "Mexico", flag: "🇲🇽", code: "MX" },
  // South America
  { name: "Argentina", flag: "🇦🇷", code: "AR" },
  { name: "Brazil", flag: "🇧🇷", code: "BR" },
  { name: "Chile", flag: "🇨🇱", code: "CL" },
  { name: "Colombia", flag: "🇨🇴", code: "CO" },
  // Oceania
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "New Zealand", flag: "🇳🇿", code: "NZ" },
]

const REGIONS = [
  { id: "all", name: "All", count: COUNTRIES.length },
  { id: "asia", name: "Asia", count: 49 },
  { id: "europe", name: "Europe", count: 33 },
  { id: "africa", name: "Africa", count: 8 },
  { id: "north-america", name: "N. America", count: 3 },
  { id: "south-america", name: "S. America", count: 4 },
  { id: "oceania", name: "Oceania", count: 2 },
]

export default function CoverageClient() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredCountries = searchQuery 
    ? COUNTRIES.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : COUNTRIES

  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Globe className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Global Network</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F5B400]">Coverage Area</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver to {COUNTRIES.length}+ countries and territories worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">{COUNTRIES.length}+</div>
            <div className="text-gray-500 text-sm">Countries</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">50K+</div>
            <div className="text-gray-500 text-sm">Cities</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">24/7</div>
            <div className="text-gray-500 text-sm">Support</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">48h</div>
            <div className="text-gray-500 text-sm">Avg. Transit</div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Plane className="h-6 w-6 text-[#F5B400]" />
            Popular Routes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { to: "India", flag: "🇮🇳", time: "3-5 days" },
              { to: "China", flag: "🇨🇳", time: "5-7 days" },
              { to: "USA", flag: "🇺🇸", time: "7-10 days" },
              { to: "UAE", flag: "🇦🇪", time: "4-6 days" },
              { to: "UK", flag: "🇬🇧", time: "7-10 days" },
              { to: "Malaysia", flag: "🇲🇾", time: "5-7 days" },
            ].map((route, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#F5B400]/30 transition-all">
                <div className="text-3xl mb-2">{route.flag}</div>
                <div className="text-gray-900 font-medium text-sm">{route.to}</div>
                <div className="text-[#F5B400] text-xs mt-1">{route.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#F5B400] outline-none transition-all"
            />
          </div>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedRegion === region.id
                  ? "bg-[#F5B400] text-[#0a1a0f]"
                  : "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {region.name} ({region.count})
            </button>
          ))}
        </div>

        {/* Countries Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#F5B400]" />
            {searchQuery ? `Results (${filteredCountries.length})` : 'All Countries'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
            {filteredCountries.map((country, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:border-[#F5B400]/30 hover:bg-[#F5B400]/5 transition-all cursor-pointer"
              >
                <div className="text-2xl mb-1">{country.flag}</div>
                <div className="text-gray-900 text-xs font-medium truncate">{country.name}</div>
                <div className="text-gray-400 text-[10px]">{country.code}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Package className="h-6 w-6 text-[#F5B400] shrink-0 mt-1" />
            <div>
              <h4 className="text-gray-900 font-semibold mb-2">Need a Custom Route?</h4>
              <p className="text-gray-600 text-sm">
                Contact our support team for shipping to destinations not listed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
