"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Phone, X } from "lucide-react";
import Image from "next/image";
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
   HOOK: Body Scroll Lock
   ══════════════════════════════════ */
function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLocked]);
}

/* ══════════════════════════════════
   MOBILE DRAWER
   ══════════════════════════════════ */
function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  useEscapeKey(onClose);
  useScrollLock(isOpen);

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 lg:hidden transition-all duration-500",
        isOpen ? "visible" : "invisible",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-75 bg-[#0a2a16] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/6 shrink-0">
          <Image
            src="/logo.png"
            alt="Cross Cart"
            width={100}
            height={26}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {NAV_LINKS.map((item, index) => (
            <div
              key={item.href}
              style={{
                transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                transition: "all 0.4s ease",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <Link
                href={item.href}
                onClick={() => !item.hasSub && onClose()}
                className={cn(
                  "flex items-center justify-between py-3.5 border-b border-white/5 text-[18px] font-medium transition-all",
                  pathname === item.href
                    ? "text-white"
                    : "text-white/50 hover:text-white",
                )}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-white/20" />
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="shrink-0 p-6 border-t border-white/6 space-y-4"
          style={{ opacity: isOpen ? 1 : 0, transition: "all 0.4s ease 0.3s" }}
        >
          <div className="flex gap-2">
            <Link
              href="/login"
              onClick={onClose}
              className="flex-1 flex items-center justify-center h-12 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={onClose}
              className="flex-1 flex items-center justify-center h-12 rounded-lg bg-[#22c55e] text-black text-sm font-bold hover:bg-[#16a34a] transition-all"
            >
              Register
            </Link>
          </div>
          <a
            href="tel:+8801234567890"
            className="flex items-center justify-center gap-2 text-sm text-white/30"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+880 1410-144466</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;
