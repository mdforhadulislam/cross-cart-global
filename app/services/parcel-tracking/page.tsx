import React from 'react'
import { Search, Package, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  { icon: Package, title: "Enter Tracking ID", desc: "Enter your tracking number" },
  { icon: Search, title: "View Status", desc: "See real-time location updates" },
  { icon: MapPin, title: "Track Journey", desc: "Follow your package's journey" },
  { icon: CheckCircle2, title: "Delivered", desc: "Get notified upon delivery" },
]

export default function ParcelTrackingPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Search className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Track Anywhere</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Parcel <span className="text-[#F5B400]">Tracking</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Track your shipments in real-time. Get instant updates on location, 
            status, and estimated delivery time.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">How to Track</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <div key={i} className="text-center">
                <div className="h-12 w-12 rounded-full bg-[#F5B400]/10 flex items-center justify-center mx-auto mb-2">
                  <step.icon className="h-6 w-6 text-[#F5B400]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-white/40 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/track" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#081f10] font-bold rounded-xl">
            Track Your Shipment <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
