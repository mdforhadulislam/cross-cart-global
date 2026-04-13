import { ArrowRight, CheckCircle2, Globe, Plane, Ship, Truck } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  { icon: Plane, title: "Air Freight", desc: "3-10 business days", color: "#3B82F6" },
  { icon: Ship, title: "Sea Freight", desc: "25-35 business days", color: "#10B981" },
  { icon: Truck, title: "Land Transport", desc: "5-15 business days", color: "#8B5CF6" },
]

const ROUTES = [
  "Bangladesh ↔ India",
  "Bangladesh ↔ China",
  "Bangladesh ↔ USA",
  "Bangladesh ↔ UK",
  "Bangladesh ↔ UAE",
  "Bangladesh ↔ Malaysia",
]

export default function InternationalShippingPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Globe className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Global Reach</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            International <span className="text-[#F5B400]">Shipping</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Connect to over 220 countries worldwide. We offer multiple shipping methods 
            to suit your budget and timeline.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <s.icon className="h-10 w-10 mx-auto mb-3" style={{ color: s.color }} />
              <h3 className="text-white font-bold mb-1">{s.title}</h3>
              <p className="text-white/50 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Popular International Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ROUTES.map((route, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                <Globe className="h-5 w-5 text-[#F5B400] mx-auto mb-1" />
                <span className="text-white/70 text-sm">{route}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F5B400]/5 border border-[#F5B400]/20 rounded-xl p-6">
          <h3 className="text-white font-bold mb-3">What{"'"}s Included</h3>
          <div className="grid grid-cols-2 gap-2">
            {["Door-to-door delivery", "Customs clearance", "Real-time tracking", "Insurance options", "24/7 support", "Competitive rates"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5B400]" />
                <span className="text-white/60 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/price" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#081f10] font-bold rounded-xl">
            Get Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
