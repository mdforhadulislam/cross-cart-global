"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  CircleDot,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

/* ══════════════════════════════════
   DATA
   ══════════════════════════════════ */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/price", label: "Get Quote" },
  { href: "/track", label: "Track Parcel" },
  { href: "/about", label: "About Us", hasSub: true },
  { href: "/contact", label: "Contact" },
];

const ABOUT_SUB = [
  { href: "/about/about-cross-cart", label: "About Cross Cart", icon: ShieldCheck },
  { href: "/about/why-cross-cart", label: "Why Cross Cart", icon: ShieldCheck },
  { href: "/about/work-process", label: "Work Process", icon: CircleDot },
  { href: "/about/coverage-area", label: "Coverage Area", icon: MapPin },
  { href: "/about/our-team", label: "Our Team", icon: Users },
  { href: "/about/our-partners", label: "Our Partners", icon: Users },
  { href: "/about/faq", label: "FAQ", icon: Users },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

/* ══════════════════════════════════
   HOOK: Escape Key
   ══════════════════════════════════ */
function useEscapeKey(callback: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [callback]);
}

/* ══════════════════════════════════
   DESKTOP FULL-SCREEN OVERLAY
   ══════════════════════════════════ */
function DesktopOverlay({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  useEscapeKey(onClose);
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 hidden lg:block transition-all duration-500",
        isOpen ? "visible" : "invisible pointer-events-none",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div
        className="absolute inset-0 bg-[#0a1a0f] backdrop-blur-md h-auto"
        style={{
          clipPath: isOpen
            ? "circle(150% at 50px 50%)"
            : "circle(0% at 50px 50%)",
          transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close Button */}
        <div className="relative h-full flex flex-col max-w-5xl mx-auto px-10">
          <div className="flex justify-end pt-8">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-[#F5B400] hover:text-[#F5B400]/90 transition-colors group"
              aria-label="Close menu"
            >
              <div className="flex h-12 w-34 p-3 align-middle items-center justify-center gap-4 rounded-xl border border-[#F5B400] group-hover:border-[#F5B400]/90 group-hover:bg-[#F5B400]/10 transition-all">
                <div className="text-[14px] font-bold tracking-[0.2em] uppercase">
                  Close
                </div>
                <X className="h-6 w-6" />
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-2.5 border-b border-white/6 transition-all duration-300"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.07}s`,
                    }}
                  >
                    <span
                      className={cn(
                        "text-[32px] font-bold tracking-tight transition-all duration-300",
                        pathname === link.href
                          ? "text-white"
                          : "text-white/40 group-hover:text-white/90",
                      )}
                    >
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-white/20 group-hover:text-[#F5B400] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </Link>

                  {/* About Sub-links */}
                  {link.hasSub && (
                    <div className="flex gap-5 mt-3 mb-3 pl-2">
                      {ABOUT_SUB.map((sub, si) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="flex items-center gap-2 text-[18px] text-white/30 hover:text-white/70 transition-colors"
                            style={{
                              opacity: isOpen ? 1 : 0,
                              transition: `all 0.5s ease ${0.5 + si * 0.1}s`,
                            }}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Bottom Footer Info */}
          <div
            className="pb-12 flex items-end justify-between"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "all 0.6s ease 0.6s",
            }}
          >
            <div className="flex flex-col gap-2">
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+880 1410-144466</span>
              </a>
              <a
                href="mailto:cross.cart.bd@gmail.com"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>cross.cart.bd@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F5B400] text-white/30 hover:text-white hover:border-[#F5B400]/90 transition-all"
                  >
                    <Icon className="h-10 w-10 text-[#F5B400]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopOverlay;
