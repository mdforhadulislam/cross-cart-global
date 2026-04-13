import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  Package,
  Shield,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Cross Cart Global | Company History & Timeline",
  description: "Discover the journey of Cross Cart Global from a small courier service in 2009 to a global logistics leader serving 220+ countries.",
  keywords: ["cross cart history", "company story", "logistics company Bangladesh", "courier service history"],
}

const TIMELINE = [
  {
    year: "2009",
    event: "Company Founded",
    description: "Cross Cart started as a small courier service in Dhaka",
  },
  {
    year: "2012",
    event: "International Expansion",
    description: "Launched first international routes to India and UAE",
  },
  {
    year: "2015",
    event: "Air Freight Service",
    description: "Introduced air freight services for faster deliveries",
  },
  {
    year: "2018",
    event: "Online Tracking",
    description: "Launched real-time tracking system for all shipments",
  },
  {
    year: "2020",
    event: "Mobile App Launch",
    description: "Released mobile app for iOS and Android",
  },
  {
    year: "2024",
    event: "Global Leader",
    description: "Now serving 220+ countries with 50K+ customers",
  },
];

export default function AboutCrossCartPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#F5B400]">Cross Cart Global</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto text-lg">
            From a small local courier to a global logistics leader, our journey
            has been driven by commitment to excellence and customer
            satisfaction.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-900/60 mb-4 leading-relaxed">
            Cross Cart Global is a leading international logistics and courier
            company headquartered in Dhaka, Bangladesh. Established in 2009, we
            have grown to become one of the most trusted names in cross-border
            shipping.
          </p>
          <p className="text-gray-900/60 leading-relaxed">
            Our mission is simple: to make international shipping accessible,
            affordable, and reliable for everyone. Whether you{"'"}re a business
            shipping products overseas or an individual sending a gift to
            family, we ensure your package reaches its destination safely and on
            time.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Shield,
                title: "Reliability",
                desc: "Your package is in safe hands",
              },
              {
                icon: Clock,
                title: "Punctuality",
                desc: "On-time delivery is our priority",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Connect to 220+ countries",
              },
              {
                icon: CheckCircle2,
                title: "Transparency",
                desc: "No hidden fees or surprises",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-gray-200 rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="h-12 w-12 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-[#F5B400]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold mb-1">{value.title}</h3>
                    <p className="text-gray-900/50 text-sm">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <div className="space-y-6">
            {TIMELINE.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-[#F5B400] font-bold">{item.year}</span>
                </div>
                <div className="relative pl-6 border-l border-[#F5B400]/30">
                  <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#F5B400]" />
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {item.event}
                  </h3>
                  <p className="text-gray-900/50 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Ship With Us?
          </h2>
          <Link
            href="/price"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] font-bold rounded-xl transition-all"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
