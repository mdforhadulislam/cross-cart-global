import React from 'react'
import { Package, DollarSign, Truck, CheckCircle2, ArrowRight, Ship } from 'lucide-react'
import Link from 'next/link'

const BENEFITS = [
  { icon: DollarSign, title: "Volume Discounts", desc: "Save up to 40% on bulk shipments" },
  { icon: Truck, title: "Dedicated Fleet", desc: "Priority pickup and delivery" },
  { icon: Package, title: "Custom Solutions", desc: "Tailored to your business needs" },
  { icon: Ship, title: "Sea Freight Options", desc: "Cost-effective for large volumes" },
]

export default function BulkShippingPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">For Business</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bulk <span className="text-[#F5B400]">Shipping</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Streamline your business logistics with our bulk shipping solutions. 
            Enjoy discounted rates and dedicated support for high-volume shippers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {BENEFITS.map((b, i) => (
            <div key={i} className="bg-white/5 border border-gray-200 rounded-xl p-4 text-center">
              <b.icon className="h-8 w-8 text-[#F5B400] mx-auto mb-2" />
              <h3 className="text-gray-900 font-semibold text-sm">{b.title}</h3>
              <p className="text-gray-900/40 text-xs mt-1">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Enterprise Features</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              "API integration available",
              "Dedicated account manager",
              "Custom invoicing",
              "Priority support",
              "Volume-based pricing",
              "Warehouse access",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5B400]" />
                <span className="text-gray-900/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl">
            Contact Sales <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
