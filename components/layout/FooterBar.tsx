"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUp,
  Building2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

/* ══════════════════════════════════
   DATA
   ══════════════════════════════════ */

interface SubLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  icon: React.ElementType;
  links: SubLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "About Us",
    icon: ShieldCheck,
    links: [
      { href: "/about", label: "About Cross Cart" },
      { href: "/about/about-cross-cart", label: "Our Story" },
      { href: "/about/why-cross-cart", label: "Why Cross Cart" },
      { href: "/about/work-process", label: "Work Process" },
      { href: "/about/coverage-area", label: "Coverage Area" },
      { href: "/about/our-team", label: "Our Team" },
      { href: "/about/our-partners", label: "Our Partners" },
      { href: "/about/faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    icon: Truck,
    links: [
      { href: "/services/international-shipping", label: "International Shipping" },
      { href: "/services/express-delivery", label: "Express Delivery" },
      { href: "/services/warehousing", label: "Warehousing" },
      { href: "/services/custom-clearance", label: "Custom Clearance" },
      { href: "/services/bulk-shipping", label: "Bulk Shipping" },
      { href: "/services/parcel-tracking", label: "Parcel Tracking" },
      { href: "/services/service-updates", label: "Service Updates" },
    ],
  },
  {
    title: "Quick Links",
    icon: MessageCircle,
    links: [
      { href: "/track", label: "Track a Parcel" },
      { href: "/price", label: "Get a Quote" },
      { href: "/contact", label: "Contact Us" },
      { href: "/about/help-and-support", label: "Help & Support" },
    ],
  },
  {
    title: "Legal",
    icon: Globe,
    links: [
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/legal/shipping-policy", label: "Shipping Policy" },
      { href: "/legal/refund-policy", label: "Refund Policy" },
    ],
  },
];

/* ══════════════════════════════════
   WAREHOUSE LOCATIONS
   ══════════════════════════════════ */
interface WarehouseLocation {
  city: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

const WAREHOUSE_LOCATIONS: WarehouseLocation[] = [
  {
    city: "Dhaka",
    area: "Mohakhali",
    address:
      "Warehouse No.1, Behind Sena Kalyan Sangstha (SKS Tower), Mohakhali DOHS, 1206",
    phone: "+88 01410-144466",
    hours: "Sat–Thu: 10:00 AM – 9:00 PM",
    mapUrl: "https://maps.google.com/?q=Gulshan+2+Dhaka",
  },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

/* ══════════════════════════════════
   WAREHOUSE CARD
   ══════════════════════════════════ */
function WarehouseCard({ location }: { location: WarehouseLocation }) {
  return (
    <div className="group relative flex flex-col h-full rounded-xl border border-gray-2006 bg-white/2 hover:bg-white/4 hover:border-[#F5B400]/20 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F5B400]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* City + Area Header */}
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-[16px] font-bold text-gray-900/90 group-hover:text-gray-900 transition-colors">
              {location.city}
            </h4>
            <p className="text-[13px] text-[#F5B400]/70 mt-0.5">
              {location.area}
            </p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5B400]/8 border border-[#F5B400]/15 group-hover:bg-[#F5B400]/15 transition-all">
            <MapPin className="h-4 w-4 text-[#F5B400]" />
          </div>
        </div>

        {/* Address */}
        <p className="text-[13px] leading-relaxed text-gray-900/35">
          {location.address}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Phone + Hours */}
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-2005">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-gray-900/25 shrink-0" />
            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="text-[12px] text-gray-900/40 hover:text-[#F5B400] transition-colors truncate"
            >
              {location.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gray-900/25 shrink-0" />
            <span className="text-[12px] text-gray-900/30">{location.hours}</span>
          </div>
        </div>

        {/* Directions Link */}
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg border border-[#F5B400]/25 bg-[#F5B400]/5 text-[#F5B400] text-[12px] font-semibold tracking-wide uppercase hover:bg-[#F5B400]/12 hover:border-[#F5B400]/40 active:scale-[0.97] transition-all duration-200"
        >
          <MapPin className="h-3.5 w-3.5" />
          Get Directions
        </a>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   ACCORDION ITEM (Mobile)
   ══════════════════════════════════ */
function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: FooterSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = section.icon;

  return (
    <div className="border-b border-gray-2008 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-1 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-[#F5B400]" />
          <span className="text-[15px] font-bold tracking-wide uppercase text-gray-900/90 group-hover:text-gray-900 transition-colors">
            {section.title}
          </span>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F5B400]/40 bg-[#F5B400]/5 text-[#F5B400] transition-all">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pb-4 pl-7 flex flex-col gap-0.5">
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-[14px] text-gray-900/45 hover:text-[#F5B400] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   BACK TO TOP BUTTON
   ══════════════════════════════════ */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-lg",
        "bg-[#F5B400] text-[#0a1a0f] shadow-lg shadow-black/30",
        "hover:bg-[#F5B400]/90 active:scale-[0.92]",
        "transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* ══════════════════════════════════
   MAIN FOOTER COMPONENT
   ══════════════════════════════════ */
export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <React.Fragment>
      <BackToTop />

      <footer className="bg-white relative overflow-hidden">
        {/* ─── Decorative Top Border ─── */}
        <div className="h-0.5 bg-linear-to-r from-transparent via-[#F5B400]/40 to-transparent" />

        {/* ─── Top Section: Brand + Newsletter ─── */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left: Logo & Description */}
            <div className="max-w-md">
              <Image
                src="/full-logo.png"
                alt="Cross Cart Global Logo"
                width={280}
                height={45}
                className="h-20 md:h-18 lg:h-20 w-auto object-contain brightness-110 mb-4"
              />
              <p className="text-[15px] leading-relaxed text-gray-900/40">
                Cross Cart Global is your trusted partner for international
                parcel delivery. We provide fast, reliable, and affordable
                shipping solutions from anywhere in the world to Bangladesh and
                beyond.
              </p>
            </div>

            {/* Right: Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
              <a className="flex items-center gap-3 group">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5B400]/30 bg-[#F5B400]/5 group-hover:bg-[#F5B400]/10 transition-all">
                  <Phone className="h-5 w-5 text-[#F5B400]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] uppercase tracking-widest text-gray-900/30 mb-0.5">
                    Call Us
                  </p>
                  <a
                    href="tel:+8801410144466"
                    className="text-[14px] font-semibold text-gray-900/80 group-hover:text-gray-900 transition-colors p-0 m-0"
                  >
                    +8801410144466
                  </a>
                  <a
                    href="tel:+8801811107751"
                    className="text-[14px] font-semibold text-gray-900/80 group-hover:text-gray-900 transition-colors  p-0 m-0"
                  >
                    +8801811107751
                  </a>
                </div>
              </a>

              <a
                href="mailto:cross.cart.bd@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5B400]/30 bg-[#F5B400]/5 group-hover:bg-[#F5B400]/10 transition-all">
                  <Mail className="h-5 w-5 text-[#F5B400]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-gray-900/30 mb-0.5">
                    Email Us
                  </p>
                  <p className="text-[14px] font-semibold text-gray-900/80 group-hover:text-gray-900 transition-colors">
                    cross.cart.bd@gmail.com
                  </p>
                </div>
              </a>

              <a href="/contact" className="flex items-center gap-3 group">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5B400]/30 bg-[#F5B400]/5 group-hover:bg-[#F5B400]/10 transition-all">
                  <MapPin className="h-5 w-5 text-[#F5B400]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-gray-900/30 mb-0.5">
                    Visit Us
                  </p>
                  <p className="text-[14px] font-semibold text-gray-900/80 group-hover:text-gray-900 transition-colors">
                    Bangladesh
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="h-0.5 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ═════════════════════════════════════════
           WAREHOUSE LOCATIONS SECTION
           ═════════════════════════════════════════ */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 lg:py-14">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F5B400]/30 bg-[#F5B400]/8">
              <Building2 className="h-4.5 w-4.5 text-[#F5B400]" />
            </div>
            <h2 className="text-[18px] lg:text-[20px] font-bold tracking-tight text-gray-900/90">
              Our Warehouse Locations
            </h2>
          </div>
          <p className="text-[14px] text-gray-900/30 mb-8 lg:mb-10 pl-12">
            Visit any of our warehouses across Bangladesh for drop-off, pickup,
            or assistance.
          </p>

          {/* Desktop: 4-column Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5">
            {WAREHOUSE_LOCATIONS.map((loc) => (
              <WarehouseCard key={loc.city} location={loc} />
            ))}
          </div>

          {/* Mobile: 2-column Grid */}
          <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4">
            {WAREHOUSE_LOCATIONS.map((loc) => (
              <WarehouseCard key={loc.city} location={loc} />
            ))}
          </div>

          {/* View All Coverage Link */}
          <div className="flex justify-center mt-8">
            <Link
              href="/about/coverage-area"
              className="flex items-center gap-2 text-[14px] font-semibold text-[#F5B400]/80 hover:text-[#F5B400] transition-colors group"
            >
              View Full Coverage Map
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ═══════════════════════════════
           DESKTOP: Multi-Column Links
           ═══════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12">
            <div className="grid grid-cols-4 gap-8 xl:gap-12">
              {FOOTER_SECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title}>
                    <div className="flex items-center gap-2.5 mb-6">
                      <Icon className="h-4.5 w-4.5 text-[#F5B400]" />
                      <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-gray-900/90">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-0.5">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="py-2 text-[14px] text-gray-900/35 hover:text-[#F5B400] transition-colors duration-200 inline-block"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
           MOBILE: Accordion Links
           ═══════════════════════════════ */}
        <div className="lg:hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
            {FOOTER_SECTIONS.map((section, index) => (
              <AccordionItem
                key={section.title}
                section={section}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>

        {/* ─── Bottom Divider ─── */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ─── Bottom Bar: Copyright + Socials ─── */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Copyright */}
            <p className="text-[13px] text-gray-900/30 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Cross Cart Global. All Rights
              Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-20010 bg-white/2 text-gray-900/25 hover:text-[#F5B400] hover:border-[#F5B400]/40 hover:bg-[#F5B400]/5 transition-all duration-300"
                  >
                    <Icon className="h-9 w-9" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── Subtle Background Glow ─── */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-[#F5B400]/2 rounded-full blur-[100px]" />
      </footer>
    </React.Fragment>
  );
}
