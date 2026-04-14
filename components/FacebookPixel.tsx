"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/fpixel";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      pageview();
    }, 500); // small delay ensures fbq loaded

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}