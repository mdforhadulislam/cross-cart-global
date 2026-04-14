"use client";

import { pageview } from "@/lib/fpixel";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    pageview();
  }, [pathname, searchParams]);

  return null;
}
