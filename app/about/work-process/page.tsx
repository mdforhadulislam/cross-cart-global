import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Package,
  Plane,
  Truck,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Cross Cart Global | Shipping Process",
  description: "Learn how Cross Cart Global's shipping process works - from pickup to delivery. Simple 5-step process for international courier services.",
  keywords: ["how shipping works", "courier process", "shipping steps", "delivery process Bangladesh"],
}

const STEPS = [
  {
    step: 1,
    icon: Package,
    title: "Submit Your Package",
    description: "Fill out the pickup form or drop off at our service point",
  },
  {
    step: 2,
    icon: Truck,
    title: "We Pick Up",
    description: "Our courier collects your package from your location",
  },
  {
    step: 3,
    icon: Plane,
    title: "Ship Internationally",
    description: "Your package is transported via air or sea freight",
  },
  {
    step: 4,
    icon: Globe,
    title: "Customs Clearance",
    description: "We handle all documentation and customs procedures",
  },
  {
    step: 5,
    icon: CheckCircle2,
    title: "Delivered",
    description: "Package arrives at recipient's doorstep safely",
  },
];

export default function WorkProcessPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              How It Works
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F5B400]">Work Process</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            From pickup to delivery, we ensure a seamless shipping experience.
            Here{"'"}s how we bring your packages to their destination.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === STEPS.length - 1;
            return (
              <div key={index} className="relative">
                {!isLast && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-linear-to-b from-[#F5B400]/50 to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="relative z-10 h-16 w-16 rounded-2xl bg-[#F5B400] flex items-center justify-center shrink-0 shadow-lg shadow-[#F5B400]/30">
                    <Icon className="h-8 w-8 text-[#0a1a0f]" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#F5B400]/10 text-[#F5B400] text-xs font-bold rounded-full">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-900/50">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Send Your First Package?
            </h2>
            <p className="text-gray-900/50 mb-6">
              Get started with our fast and reliable shipping services
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/price"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] font-bold rounded-xl transition-all"
              >
                Get Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
