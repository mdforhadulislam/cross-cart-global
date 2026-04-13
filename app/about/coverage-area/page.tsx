"use client"

import React, { useState } from 'react'
import { Globe, MapPin, Plane, Package, Search, CheckCircle2 } from 'lucide-react'

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
  { name: "Andorra", flag: "🇦🇩", code: "AD" },
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
  { name: "Kosovo", flag: "🇽🇰", code: "XK" },
  { name: "Latvia", flag: "🇱🇻", code: "LV" },
  { name: "Liechtenstein", flag: "🇱🇮", code: "LI" },
  { name: "Lithuania", flag: "🇱🇹", code: "LT" },
  { name: "Luxembourg", flag: "🇱🇺", code: "LU" },
  { name: "Malta", flag: "🇲🇹", code: "MT" },
  { name: "Moldova", flag: "🇲🇩", code: "MD" },
  { name: "Monaco", flag: "🇲🇨", code: "MC" },
  { name: "Montenegro", flag: "🇲🇪", code: "ME" },
  { name: "Netherlands", flag: "🇳🇱", code: "NL" },
  { name: "North Macedonia", flag: "🇲🇰", code: "MK" },
  { name: "Norway", flag: "🇳🇴", code: "NO" },
  { name: "Poland", flag: "🇵🇱", code: "PL" },
  { name: "Portugal", flag: "🇵🇹", code: "PT" },
  { name: "Romania", flag: "🇷🇴", code: "RO" },
  { name: "Russia", flag: "🇷🇺", code: "RU" },
  { name: "San Marino", flag: "🇸🇲", code: "SM" },
  { name: "Serbia", flag: "🇷🇸", code: "RS" },
  { name: "Slovakia", flag: "🇸🇰", code: "SK" },
  { name: "Slovenia", flag: "🇸🇮", code: "SI" },
  { name: "Spain", flag: "🇪🇸", code: "ES" },
  { name: "Sweden", flag: "🇸🇪", code: "SE" },
  { name: "Switzerland", flag: "🇨🇭", code: "CH" },
  { name: "Ukraine", flag: "🇺🇦", code: "UA" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
  { name: "Vatican City", flag: "🇻🇦", code: "VA" },
  
  // Africa
  { name: "Algeria", flag: "🇩🇿", code: "DZ" },
  { name: "Angola", flag: "🇦🇴", code: "AO" },
  { name: "Benin", flag: "🇧🇯", code: "BJ" },
  { name: "Botswana", flag: "🇧🇼", code: "BW" },
  { name: "Burkina Faso", flag: "🇧🇫", code: "BF" },
  { name: "Burundi", flag: "🇧🇮", code: "BI" },
  { name: "Cameroon", flag: "🇨🇲", code: "CM" },
  { name: "Cape Verde", flag: "🇨🇻", code: "CV" },
  { name: "Central African Rep.", flag: "🇨🇫", code: "CF" },
  { name: "Chad", flag: "🇹🇩", code: "TD" },
  { name: "Comoros", flag: "🇰🇲", code: "KM" },
  { name: "Congo", flag: "🇨🇬", code: "CG" },
  { name: "DR Congo", flag: "🇨🇩", code: "CD" },
  { name: "Djibouti", flag: "🇩🇯", code: "DJ" },
  { name: "Egypt", flag: "🇪🇬", code: "EG" },
  { name: "Equatorial Guinea", flag: "🇬🇶", code: "GQ" },
  { name: "Eritrea", flag: "🇪🇷", code: "ER" },
  { name: "Eswatini", flag: "🇸🇿", code: "SZ" },
  { name: "Ethiopia", flag: "🇪🇹", code: "ET" },
  { name: "Gabon", flag: "🇬🇦", code: "GA" },
  { name: "Gambia", flag: "🇬🇲", code: "GM" },
  { name: "Ghana", flag: "🇬🇭", code: "GH" },
  { name: "Guinea", flag: "🇬🇳", code: "GN" },
  { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW" },
  { name: "Ivory Coast", flag: "🇨🇮", code: "CI" },
  { name: "Kenya", flag: "🇰🇪", code: "KE" },
  { name: "Lesotho", flag: "🇱🇸", code: "LS" },
  { name: "Liberia", flag: "🇱🇷", code: "LR" },
  { name: "Libya", flag: "🇱🇾", code: "LY" },
  { name: "Madagascar", flag: "🇲🇬", code: "MG" },
  { name: "Malawi", flag: "🇲🇼", code: "MW" },
  { name: "Mali", flag: "🇲🇱", code: "ML" },
  { name: "Mauritania", flag: "🇲🇷", code: "MR" },
  { name: "Mauritius", flag: "🇲🇺", code: "MU" },
  { name: "Morocco", flag: "🇲🇦", code: "MA" },
  { name: "Mozambique", flag: "🇲🇿", code: "MZ" },
  { name: "Namibia", flag: "🇳🇦", code: "NA" },
  { name: "Niger", flag: "🇳🇪", code: "NE" },
  { name: "Nigeria", flag: "🇳🇬", code: "NG" },
  { name: "Rwanda", flag: "🇷🇼", code: "RW" },
  { name: "Sao Tome", flag: "🇸🇹", code: "ST" },
  { name: "Senegal", flag: "🇸🇳", code: "SN" },
  { name: "Seychelles", flag: "🇸🇨", code: "SC" },
  { name: "Sierra Leone", flag: "🇸🇱", code: "SL" },
  { name: "Somalia", flag: "🇸🇴", code: "SO" },
  { name: "South Africa", flag: "🇿🇦", code: "ZA" },
  { name: "South Sudan", flag: "🇸🇸", code: "SS" },
  { name: "Sudan", flag: "🇸🇩", code: "SD" },
  { name: "Tanzania", flag: "🇹🇿", code: "TZ" },
  { name: "Togo", flag: "🇹🇬", code: "TG" },
  { name: "Tunisia", flag: "🇹🇳", code: "TN" },
  { name: "Uganda", flag: "🇺🇬", code: "UG" },
  { name: "Zambia", flag: "🇿🇲", code: "ZM" },
  { name: "Zimbabwe", flag: "🇿🇼", code: "ZW" },
  
  // North America
  { name: "Antigua", flag: "🇦🇬", code: "AG" },
  { name: "Bahamas", flag: "🇧🇸", code: "BS" },
  { name: "Barbados", flag: "🇧🇧", code: "BB" },
  { name: "Belize", flag: "🇧🇿", code: "BZ" },
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "Costa Rica", flag: "🇨🇷", code: "CR" },
  { name: "Cuba", flag: "🇨🇺", code: "CU" },
  { name: "Dominica", flag: "🇩🇲", code: "DM" },
  { name: "Dominican Rep.", flag: "🇩🇴", code: "DO" },
  { name: "El Salvador", flag: "🇸🇻", code: "SV" },
  { name: "Grenada", flag: "🇬🇩", code: "GD" },
  { name: "Guatemala", flag: "🇬🇹", code: "GT" },
  { name: "Haiti", flag: "🇭🇹", code: "HT" },
  { name: "Honduras", flag: "🇭🇳", code: "HN" },
  { name: "Jamaica", flag: "🇯🇲", code: "JM" },
  { name: "Mexico", flag: "🇲🇽", code: "MX" },
  { name: "Nicaragua", flag: "🇳🇮", code: "NI" },
  { name: "Panama", flag: "🇵🇦", code: "PA" },
  { name: "St. Kitts", flag: "🇰🇳", code: "KN" },
  { name: "St. Lucia", flag: "🇱🇨", code: "LC" },
  { name: "St. Vincent", flag: "🇻🇨", code: "VC" },
  { name: "Trinidad", flag: "🇹🇹", code: "TT" },
  { name: "USA", flag: "🇺🇸", code: "US" },
  
  // South America
  { name: "Argentina", flag: "🇦🇷", code: "AR" },
  { name: "Bolivia", flag: "🇧🇴", code: "BO" },
  { name: "Brazil", flag: "🇧🇷", code: "BR" },
  { name: "Chile", flag: "🇨🇱", code: "CL" },
  { name: "Colombia", flag: "🇨🇴", code: "CO" },
  { name: "Ecuador", flag: "🇪🇨", code: "EC" },
  { name: "Guyana", flag: "🇬🇾", code: "GY" },
  { name: "Paraguay", flag: "🇵🇾", code: "PY" },
  { name: "Peru", flag: "🇵🇪", code: "PE" },
  { name: "Suriname", flag: "🇸🇷", code: "SR" },
  { name: "Uruguay", flag: "🇺🇾", code: "UY" },
  { name: "Venezuela", flag: "🇻🇪", code: "VE" },
  
  // Oceania
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "Fiji", flag: "🇫🇯", code: "FJ" },
  { name: "Kiribati", flag: "🇰🇮", code: "KI" },
  { name: "Marshall Islands", flag: "🇲🇭", code: "MH" },
  { name: "Micronesia", flag: "🇫🇲", code: "FM" },
  { name: "Nauru", flag: "🇳🇷", code: "NR" },
  { name: "New Zealand", flag: "🇳🇿", code: "NZ" },
  { name: "Palau", flag: "🇵🇼", code: "PW" },
  { name: "Papua New Guinea", flag: "🇵🇬", code: "PG" },
  { name: "Samoa", flag: "🇼🇸", code: "WS" },
  { name: "Solomon Islands", flag: "🇸🇧", code: "SB" },
  { name: "Tonga", flag: "🇹🇴", code: "TO" },
  { name: "Tuvalu", flag: "🇹🇻", code: "TV" },
  { name: "Vanuatu", flag: "🇻🇺", code: "VU" },
]

const REGIONS = [
  { id: "all", name: "All Countries", count: COUNTRIES.length },
  { id: "asia", name: "Asia", count: COUNTRIES.filter(c => ["AF","AM","AZ","BH","BD","BT","BN","KH","CN","CY","GE","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MY","MV","MN","MM","NP","KP","OM","PK","PS","PH","QA","SA","SG","KR","LK","SY","TW","TJ","TH","TL","TR","TM","AE","UZ","VN","YE"].includes(c.code)).length },
  { id: "europe", name: "Europe", count: COUNTRIES.filter(c => ["AL","AD","AT","BY","BE","BA","BG","HR","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA"].includes(c.code)).length },
  { id: "africa", name: "Africa", count: COUNTRIES.filter(c => ["DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CD","DJ","EG","GQ","ER","SZ","ET","GA","GM","GH","GN","GW","CI","KE","LS","LR","LY","MG","MW","ML","MR","MU","MA","MZ","NA","NE","NG","RW","ST","SN","SC","SL","SO","ZA","SS","SD","TZ","TG","TN","UG","ZM","ZW"].includes(c.code)).length },
  { id: "north-america", name: "North America", count: COUNTRIES.filter(c => ["AG","BS","BB","BZ","CA","CR","CU","DM","DO","SV","GD","GT","HT","HN","JM","MX","NI","PA","KN","LC","VC","TT","US"].includes(c.code)).length },
  { id: "south-america", name: "South America", count: COUNTRIES.filter(c => ["AR","BO","BR","CL","CO","EC","GY","PY","PE","SR","UY","VE"].includes(c.code)).length },
  { id: "oceania", name: "Oceania", count: COUNTRIES.filter(c => ["AU","FJ","KI","MH","FM","NR","NZ","PW","PG","WS","SB","TO","TV","VU"].includes(c.code)).length },
]

const getFilteredCountries = (region: string) => {
  if (region === "all") return COUNTRIES
  
  const regionCodes: Record<string, string[]> = {
    "asia": ["AF","AM","AZ","BH","BD","BT","BN","KH","CN","CY","GE","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MY","MV","MN","MM","NP","KP","OM","PK","PS","PH","QA","SA","SG","KR","LK","SY","TW","TJ","TH","TL","TR","TM","AE","UZ","VN","YE"],
    "europe": ["AL","AD","AT","BY","BE","BA","BG","HR","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA"],
    "africa": ["DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CD","DJ","EG","GQ","ER","SZ","ET","GA","GM","GH","GN","GW","CI","KE","LS","LR","LY","MG","MW","ML","MR","MU","MA","MZ","NA","NE","NG","RW","ST","SN","SC","SL","SO","ZA","SS","SD","TZ","TG","TN","UG","ZM","ZW"],
    "north-america": ["AG","BS","BB","BZ","CA","CR","CU","DM","DO","SV","GD","GT","HT","HN","JM","MX","NI","PA","KN","LC","VC","TT","US"],
    "south-america": ["AR","BO","BR","CL","CO","EC","GY","PY","PE","SR","UY","VE"],
    "oceania": ["AU","FJ","KI","MH","FM","NR","NZ","PW","PG","WS","SB","TO","TV","VU"],
  }
  
  return COUNTRIES.filter(c => regionCodes[region]?.includes(c.code))
}

export default function CoverageAreaPage() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredCountries = searchQuery 
    ? COUNTRIES.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getFilteredCountries(selectedRegion)

  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
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
            We deliver to {COUNTRIES.length}+ countries and territories worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#F5B400] mb-2">{COUNTRIES.length}+</div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { to: "India", flag: "🇮🇳", time: "3-5 days" },
              { to: "China", flag: "🇨🇳", time: "5-7 days" },
              { to: "USA", flag: "🇺🇸", time: "7-10 days" },
              { to: "UAE", flag: "🇦🇪", time: "4-6 days" },
              { to: "UK", flag: "🇬🇧", time: "7-10 days" },
              { to: "Malaysia", flag: "🇲🇾", time: "5-7 days" },
            ].map((route, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#F5B400]/30 transition-all">
                <div className="text-3xl mb-2">{route.flag}</div>
                <div className="text-white font-medium text-sm">{route.to}</div>
                <div className="text-[#F5B400] text-xs mt-1">{route.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:border-[#F5B400]/50 outline-none transition-all"
            />
          </div>
        </div>

        {/* Region Filter */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedRegion === region.id
                    ? "bg-[#F5B400] text-[#081f10]"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                {region.name} ({region.count})
              </button>
            ))}
          </div>
        )}

        {/* Countries Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#F5B400]" />
              {searchQuery ? `Search Results (${filteredCountries.length})` : `${REGIONS.find(r => r.id === selectedRegion)?.name} Countries`}
            </h2>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#F5B400] text-sm hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>
          
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:border-[#F5B400]/30 hover:bg-[#F5B400]/5 transition-all cursor-pointer group"
                >
                  <div className="text-2xl mb-1">{country.flag}</div>
                  <div className="text-white text-xs font-medium truncate group-hover:text-[#F5B400] transition-colors">{country.name}</div>
                  <div className="text-white/30 text-[10px]">{country.code}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Globe className="h-12 w-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/50">No countries found matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>

        {/* Note */}
        <div className="mt-12 bg-[#F5B400]/5 border border-[#F5B400]/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Package className="h-6 w-6 text-[#F5B400] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-2">Delivery Not Available?</h4>
              <p className="text-white/60 text-sm">
                If your destination is not listed, please contact our support team. 
                We are constantly expanding our network to serve more destinations.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 flex items-center justify-center gap-3 text-white/40 text-sm">
          <CheckCircle2 className="h-5 w-5 text-[#F5B400]" />
          <span>All shipments include tracking, insurance, and customs clearance support</span>
        </div>
      </div>
    </div>
  )
}
