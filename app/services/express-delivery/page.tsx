import React from 'react'
import { Zap, Clock, Shield, CheckCircle2, ArrowRight, Package } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Express Delivery Service | Cross Cart Global',
  description: 'Fast express delivery within 24-48 hours to major destinations worldwide. Door-to-door service with real-time tracking and full insurance coverage.',
  keywords: 'express delivery, same day delivery, fast shipping, urgent delivery, express courier',
}

const FEATURES = [
  { icon: Zap, title: "Same Day Delivery", desc: "Within 24 hours" },
  { icon: Clock, title: "Priority Handling", desc: "First in queue" },
  { icon: Shield, title: "Full Insurance", desc: "Maximum coverage" },
  { icon: Package, title: "Real-time Tracking", desc: "GPS enabled" },
]

export default function ExpressDeliveryPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Zap className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Fast & Reliable</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Express <span className="text-[#F5B400]">Delivery</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Need it fast? Our express delivery service ensures your package arrives 
            within 24-48 hours to major destinations worldwide.
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

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Express?</h2>
          <div className="space-y-4">
            {[
              "Door-to-door delivery included",
              "Real-time tracking and notifications",
              "Priority customs clearance",
              "Dedicated customer support",
              "Full insurance coverage",
              "Proof of delivery",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#F5B400] shrink-0" />
                <span className="text-gray-900/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/price" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl">
            Get Express Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
