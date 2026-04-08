import { ArrowLeft, Home, PackageSearch, Radio } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col bg-[#0a1a0f]">
      {/* Content Container */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-15 text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#F5B400]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Icon & 404 Text */}
        <div className="relative z-10 mb-8 flex flex-col items-center">
          <div className="relative mb-6">
            {/* Spinning Radar Effect */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <Radio className="h-32 w-32 text-[#F5B400]/20" />
            </div>
            <PackageSearch className="relative h-24 w-24 text-[#F5B400]" />
          </div>

          <h1 className="text-8xl font-bold text-white tracking-tighter mb-2">
            4<span className="text-[#F5B400]">0</span>4
          </h1>

          <h2 className="text-2xl font-semibold text-white/90 mb-3">
            Page Lost in Transit
          </h2>

          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            We couldn{"'"}t find the page you{"'"}re looking for. It might have been
            moved, deleted, or perhaps the tracking number is incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/"
            className="flex items-center gap-2 h-12 px-8 bg-[#F5B400] text-[#081f10] font-bold tracking-wide uppercase rounded-lg hover:bg-[#F5B400]/90 transition-all shadow-lg shadow-[#F5B400]/10 active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 h-12 px-8 border border-[#F5B400]/30 bg-transparent text-[#F5B400] font-semibold rounded-lg hover:bg-[#F5B400]/5 hover:border-[#F5B400]/60 transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Report Issue
          </Link>
        </div>
      </div>

      {/* Optional: Include your footer here if you want it displayed on 404 */}
      {/* <Footer /> */}
    </main>
  );
}
