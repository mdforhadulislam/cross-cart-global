import React from 'react'
import { Package, Shield, Truck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FEATURES = [
  { icon: Package, title: "Secure Storage", desc: "Climate-controlled warehouses" },
  { icon: Shield, title: "Inventory Management", desc: "Real-time stock tracking" },
  { icon: Truck, title: "Fulfillment", desc: "Pick, pack, and ship services" },
  { icon: MapPin, title: "Strategic Locations", desc: "Multiple warehouse facilities" },
]

export default function WarehousingPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Storage Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Warehousing & <span className="text-[#F5B400]">Storage</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Secure, climate-controlled storage facilities for your business inventory. 
            Complete fulfillment solutions to streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-white/5 border border-gray-200 rounded-xl p-4 text-center">
              <f.icon className="h-8 w-8 text-[#F5B400] mx-auto mb-2" />
              <h3 className="text-gray-900 font-semibold text-sm">{f.title}</h3>
              <p className="text-gray-900/40 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Warehousing Services</h2>
          <div className="space-y-4">
            {[
              "Long-term and short-term storage options",
              "Climate-controlled storage for sensitive items",
              "Inventory management system integration",
              "Pick, pack, and ship fulfillment",
              "Same-day dispatch available",
              "Custom packaging solutions",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#F5B400] shrink-0" />
                <span className="text-gray-900/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl">
            Get Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
