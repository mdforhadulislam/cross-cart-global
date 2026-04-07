"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import DesktopOverlay from "./DesktopNavBar";
import MobileDrawer from "./MobileNavBar";

/* ══════════════════════════════════
   MAIN NAVBAR COMPONENT
   ══════════════════════════════════ */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#143200]/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "bg-[#143200]",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-17.5">
            {/* LEFT: Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 group"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex items-center align-middle justify-center px-3 py-3 gap-2 rounded-lg border-[#F5B400]/60 group-hover:border-[#F5B400]/90 border-2 group-hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full group-hover:bg-[#F5B400]/90 transition-colors" />
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full group-hover:bg-[#F5B400]/90 transition-colors" />
                  <span className="block w-4 h-[1.5px] bg-[#F5B400] rounded-full group-hover:bg-[#F5B400]/90 transition-colors" />
                </div>
                <div className="hidden sm:block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5B400] group-hover:text-[#F5B400]/90 transition-colors h-auto mt-0.5">
                  Menu
                </div>
              </div>
            </button>

            {/* Spacer for Desktop */}
            <div className="hidden lg:block flex-1" />

            {/* CENTER: Logo */}
            <Link
              href="/"
              className="w-full flex items-center justify-center"
              aria-label="Cross Cart Home"
            >
              <Image
                src="/full-logo.png"
                alt="Cross Cart Global Logo"
                width={180}
                height={45}
                priority
                className="h-15 w-auto object-contain"
              />
            </Link>

            {/* RIGHT: Login & Register */}
            <div className="flex items-center gap-3 flex-1 justify-end w-20">
              {/* Mobile Buttons */}
              <div className="flex lg:hidden items-center">
                <Link
                  href="/register"
                  className="flex items-center justify-center py-3 px-4 rounded-lg bg-[#F5B400] text-black text-[11px] font-bold tracking-wide uppercase hover:bg-[#F5B400]/90 transition-all"
                >
                  Login
                </Link>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 h-11 px-6 rounded-lg bg-[#F5B400] text-[#081f10] text-[13px] font-bold tracking-wide hover:bg-[#F5B400]/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-green-900/30"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 h-11 px-6 rounded-lg border-2 border-[#F5B400]/60 bg-transparent text-[#F5B400] text-[13px] font-semibold tracking-wide hover:bg-white/5 hover:border-[#F5B400]/90 active:scale-[0.97] transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════ MENUS ═══════ */}
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
