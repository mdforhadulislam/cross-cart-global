"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Box,
  Briefcase,
  Calculator,
  HeadsetIcon,
  Search,
  UserRoundKey,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ══════════════════════════════════
   DATA: Slider Images
   ══════════════════════════════════ */
const SLIDES = [
  {
    id: 1,
    // Using Unsplash for logistics placeholder
    src: "/cover-1.png",
    alt: "Global Logistics Warehouse",
  },
  {
    id: 2,
    src: "/cover-2.png",
    alt: "Shipping Containers",
  },
  {
    id: 3,
    src: "/cover-3.png",
    alt: "Courier Delivery in Action",
  },
  {
    id: 4,
    src: "/cover-4.png",
    alt: "International Shipping Routes",
  },
  {
    id: 5,
    src: "/cover-5.png",
    alt: "Cross Cart Global Team",
  },
  {
    id: 6,
    src: "/cover-6.png",
    alt: "Customer Support at Cross Cart Global",
  },
  {
    id: 7,
    src: "/cover-7.png",
    alt: "Cross Cart Global Delivery Van",
  },
  {
    id: 8,
    src: "/cover-8.png",
    alt: "Cross Cart Global Logistics Hub",
  },
  {
    id: 9,
    src: "/cover-9.png",
    alt: "Cross Cart Global International Shipping",
  },
]; 
/* ══════════════════════════════════
   DATA: Functional Modules (The 6 Boxes)
   ══════════════════════════════════ */
const MODULES = [
  // {
  //   title: "Missed a pickup or delivery",
  //   desc: "Report a missed delivery instantly.",
  //   icon: Truck,
  //   href: "/support/missed-delivery",
  // },
  {
    title: "Send an Items",
    desc: "Schedule a pickup or find drop-off locations.",
    icon: Box,
    href: "/",
  },
  {
    title: "Help & Support",
    desc: "24/7 assistance for your queries.",
    icon: HeadsetIcon,
    href: "/support",
  },
  {
    title: "Open a business account",
    desc: "Corporate shipping solutions.",
    icon: Briefcase,
    href: "/business/register",
  },
  {
    title: "Get an instant quote",
    desc: "Calculate shipping costs quickly.",
    icon: Calculator,
    href: "/price",
  },
  {
    title: "Login to MyCrossCart",
    desc: "Manage your shipments and account details.",
    icon: UserRoundKey,
    href: "/account/billing",
  },
];

/* ══════════════════════════════════
   MAIN HERO COMPONENT
   ══════════════════════════════════ */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-auto pb-8 overflow-hidden bg-[#0a1a0f]">
      {/* ─── BACKGROUND SLIDER ─── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay to match your theme and ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0a1a0f]/80 via-[#0a1a0f]/60 to-[#0a1a0f]" />
          </div>
        ))}
      </div>

      {/* ─── CONTENT CONTAINER ─── */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full w-full max-w-7xl mx-auto px-5 pt-10 lg:pt-12">
        {/* ─── TRACKING BOX (Ad Tracking Box) ─── */}
        <div className="w-full max-w-2xl animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              Track Your <span className="text-[#F5B400]">Shipment</span>
            </h1>
            <p className="text-white/60 text-sm lg:text-base">
              Enter your tracking ID to get real-time updates on your parcel.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-2xl shadow-black/50 flex flex-col sm:flex-row gap-2 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter Tracking Number (e.g., CC123456789)"
                className="w-full bg-[#0a1a0f]/50 border border-white/10 text-white placeholder:text-white/40 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5B400]/50 focus:ring-1 focus:ring-[#F5B400]/50 transition-all"
              />
            </div>
            <button className="w-full sm:w-auto h-13.5 px-8 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold tracking-wide uppercase rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
              Track Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ─── 6 FUNCTIONAL MODULES (The "Other Box Position") ─── */}
        <div className="mt-12 lg:mt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((module, index) => {
              const Icon = module.icon;
              return (
                <a
                  key={index}
                  href={module.href}
                  className="group relative flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#F5B400]/30 hover:-translate-y-1"
                >
                  {/* Icon Box */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F5B400]/10 border border-[#F5B400]/20 group-hover:bg-[#F5B400] group-hover:text-[#081f10] transition-colors duration-300">
                    <Icon className="h-6 w-6 text-[#F5B400] group-hover:text-[#081f10]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold text-base group-hover:text-[#F5B400] transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-0.5 line-clamp-1">
                      {module.desc}
                    </p>
                  </div>

                  {/* Arrow on Hover */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 text-[#F5B400]" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
