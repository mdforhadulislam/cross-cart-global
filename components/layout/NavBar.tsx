"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import DesktopOverlay from "./DesktopNavBar";
import MobileDrawer from "./MobileNavBar";

/* ══════════════════════════════════
   NAVBAR COMPONENT
══════════════════════════════════ */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* ───────── Scroll Shadow ───────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ───────── Close Menu on Route Change ───────── */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  /* ───────── 🔥 MAIN SCROLL LOCK (ONLY HERE) ───────── */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      {/* ═══════════════════════════════
          HEADER
      ═══════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0a1a0f]/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "bg-[#0a1a0f]",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-17.5">
            {/* LEFT: MENU BUTTON */}
            <div className=" sm:w-27.5">
              <button
              onClick={openMenu}
              className="flex items-center gap-4 group"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex items-center justify-center px-3 py-3 gap-2 rounded-lg border-2 border-[#F5B400]/60 group-hover:border-[#F5B400]/90 group-hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col gap-1">
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full" />
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full" />
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full" />
                </div>
                <span className="hidden sm:block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5B400]">
                  Menu
                </span>
              </div>
            </button>
            </div>

            {/* CENTER: LOGO */}
            <Link
              href="/"
              className="flex items-center justify-center w-full"
              aria-label="Cross Cart Home"
            >
              <Image
                src="/full-logo.png"
                alt="Cross Cart Global Logo"
                width={180}
                height={45}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* RIGHT: AUTH BUTTONS */}
            <div className="w-27.5 flex items-center gap-3 justify-end flex-1">
              {/* MOBILE */}
              <div className="flex lg:hidden">
                <Link
                  href="/login"
                  className="py-3 px-4 rounded-lg bg-[#F5B400] text-black text-[11px] font-bold uppercase hover:bg-[#F5B400]/90 transition"
                >
                  Login
                </Link>
              </div>

              {/* DESKTOP */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/login"
                  className="h-11 px-6 flex items-center rounded-lg bg-[#F5B400] text-[#0a1a0f] text-[13px] font-bold hover:bg-[#F5B400]/90 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="h-11 px-6 flex items-center rounded-lg border-2 border-[#F5B400]/60 text-[#F5B400] text-[13px] font-semibold hover:bg-white/5 hover:border-[#F5B400]/90 transition"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════
          MENUS
      ═══════════════════════════════ */}
      <DesktopOverlay
        isOpen={isMenuOpen}
        onClose={closeMenu}
        pathname={pathname}
      />

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        pathname={pathname}
      />
    </>
  );
}
