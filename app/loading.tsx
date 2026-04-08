export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a1a0f] px-4">
      <div className="flex flex-col items-center gap-6 max-w-md w-full text-center">
        
        {/* 1. Branded Spinner Animation */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Outer Ring (Rotates Slowly) */}
          <div className="absolute inset-0 h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-4 border-dashed border-[#F5B400]/20" />
          
          {/* Inner Ring (Rotates Fast, Opposite) */}
          <div className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-2 border-t-[#F5B400] border-r-transparent border-b-[#F5B400]/50 border-l-transparent" />
          
          {/* Center Icon (Pulse) */}
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded bg-[#F5B400] text-[#081f10] animate-pulse">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* 2. Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-wide animate-pulse">
            Preparing Shipment Data...
          </h2>
          <p className="text-sm text-[#F5B400]/70 font-mono">
            CONNECTING TO GLOBAL LOGISTICS NETWORK
          </p>
        </div>

        {/* 3. Skeleton Loader (Optional visual cue for content structure) */}
        <div className="w-full max-w-xs space-y-3 pt-4">
          <div className="h-2 w-3/4 rounded-full bg-white/5 animate-pulse" />
          <div className="h-2 w-1/2 rounded-full bg-white/5 animate-pulse delay-75" />
          <div className="h-2 w-5/6 rounded-full bg-white/5 animate-pulse delay-150" />
        </div>

      </div>
    </div>
  );
}