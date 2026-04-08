"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error Triggered:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#0a1a0f] px-5 text-center">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg py-20">
        {/* Error Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">
          System Malfunction
        </h2>

        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          Something unexpected happened on our servers. Our technical team has
          been notified and is investigating the issue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-8 bg-[#F5B400] text-[#081f10] font-bold tracking-wide uppercase rounded-lg hover:bg-[#F5B400]/90 transition-all shadow-lg shadow-[#F5B400]/10 active:scale-[0.98]"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-8 border border-white/10 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
