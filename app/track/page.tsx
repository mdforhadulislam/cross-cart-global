"use client";

import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Copy,
  Globe,
  MapPin,
  Package,
  Plane,
  RefreshCw,
  Search,
  Truck,
  Weight,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";

// --- 1. MOCK DATA (Replace this with API call later) ---
const MOCK_TRACKING_DATA = {
  trackingNumber: "CC-8849201-BD",
  status: "In Transit", // Options: Delivered, In Transit, Pending, Exception
  estimatedDelivery: "Oct 24, 2023",
  origin: "New York, USA (JFK)",
  destination: "Dhaka, Bangladesh (DAC)",
  service: "Express Air Freight",
  weight: "4.5 kg",
  pieces: "1",
  history: [
    {
      date: "Oct 22, 2023 - 14:30",
      status: "Out for Delivery",
      location: "Dhaka Hub, Gulshan-1",
      description: "Shipment is with the courier for final delivery.",
      icon: Truck,
      isActive: true,
    },
    {
      date: "Oct 21, 2023 - 09:15",
      status: "Arrived at Destination Country",
      location: "Hazrat Shahjalal Int. Airport, DAC",
      description: "Customs clearance processing started.",
      icon: Globe,
      isActive: false,
    },
    {
      date: "Oct 20, 2023 - 18:00",
      status: "Departed Origin Facility",
      location: "JFK Airport, New York",
      description: "Flight EK-586 departed for Dhaka.",
      icon: Plane,
      isActive: false,
    },
    {
      date: "Oct 19, 2023 - 11:20",
      status: "Shipment Picked Up",
      location: "Manhattan, NY",
      description: "Package collected from sender.",
      icon: Package,
      isActive: false,
    },
    {
      date: "Oct 18, 2023 - 16:45",
      status: "Label Created",
      location: "Cross Cart System",
      description: "Shipping label generated and awaiting pickup.",
      icon: CheckCircle2,
      isActive: false,
    },
  ],
};

// --- 2. COMPONENTS ---

// Helper for Status Color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "In Transit":
      return "bg-[#F5B400]/10 text-[#F5B400] border-[#F5B400]/20";
    case "Exception":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    default:
      return "bg-white/5 text-white/60 border-white/10";
  }
};

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("CC-8849201");
  const [data, setData] = useState<typeof MOCK_TRACKING_DATA | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setLoading(true);
    setError("");

    // Simulate API Call
    setTimeout(() => {
      // For demo purposes, we just return the mock data
      // In production: fetch(`/api/track/${trackingId}`)
      if (
        trackingId.toUpperCase() === "CC-8849201-BD" ||
        trackingId.length > 5
      ) {
        setData(MOCK_TRACKING_DATA);
      } else {
        setError("Tracking ID not found. Please check and try again.");
        setData(null);
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-15 px-5">
      <div className="max-w-5xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Track Your <span className="text-[#F5B400]">Shipment</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Enter your Cross Cart Tracking ID to get real-time updates on your
            parcel{"'"}s location and delivery status.
          </p>
        </div>

        {/* --- SEARCH BOX --- */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#F5B400] to-[#b8860b] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative flex bg-[#0a1a0f] rounded-xl p-2 border border-white/10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Tracking ID (e.g. CC-8849201-BD)"
                  className="w-full bg-[#081f10] border border-white/5 text-white placeholder-white/30 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5B400]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-13.5 px-8 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold tracking-wide uppercase rounded-lg transition-all flex items-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Track <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="mt-3 text-red-400 text-sm flex items-center gap-2 justify-center">
              <XCircle className="h-4 w-4" /> {error}
            </p>
          )}
        </form>

        {/* --- TRACKING RESULTS --- */}
        {data && (
          <div className="space-y-6 animate-fade-in-up">
            {/* 1. STATUS OVERVIEW CARD */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Status */}
              <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-[#F5B400]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(data.status)}`}
                      >
                        {data.status}
                      </span>
                      <span className="text-white/30 text-sm">
                        ID: {data.trackingNumber}
                      </span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(data.trackingNumber)
                        }
                        className="text-white/30 hover:text-[#F5B400] transition-colors"
                        title="Copy ID"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {data.destination}
                    </h2>
                    <p className="text-white/50 flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4" /> From: {data.origin}
                    </p>
                  </div>

                  <div className="bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-xl p-4 text-center min-w-40">
                    <p className="text-[#F5B400] text-xs font-bold uppercase tracking-widest mb-1">
                      Est. Delivery
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white font-mono font-bold text-lg">
                      <Calendar className="h-5 w-5 text-[#F5B400]" />
                      {data.estimatedDelivery}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-rows-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      Service
                    </p>
                    <p className="text-white font-semibold">{data.service}</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Weight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      Weight
                    </p>
                    <p className="text-white font-semibold">{data.weight}</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      Pieces
                    </p>
                    <p className="text-white font-semibold">{data.pieces}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. TRACKING TIMELINE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-[#F5B400]" /> Shipment
                Journey
              </h3>

              <div className="relative border-l-2 border-white/10 ml-3 space-y-8">
                {data.history.map((event, index) => {
                  const Icon = event.icon;
                  const isLast = index === data.history.length - 1;

                  return (
                    <div key={index} className="relative pl-8">
                      {/* Timeline Dot */}
                      <div
                        className={`absolute -left-2.25 top-1 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${event.isActive ? "border-[#F5B400] bg-[#F5B400]" : "border-[#0a1a0f] bg-white/20"}`}
                      >
                        {event.isActive && (
                          <div className="h-1.5 w-1.5 rounded-full bg-[#0a1a0f]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 group">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon
                              className={`h-4 w-4 ${event.isActive ? "text-[#F5B400]" : "text-white/30"}`}
                            />
                            <h4
                              className={`font-semibold ${event.isActive ? "text-white" : "text-white/50"}`}
                            >
                              {event.status}
                            </h4>
                          </div>
                          <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                            {event.description}
                          </p>
                        </div>
                        <div className="text-right min-w-35">
                          <p className="text-sm text-[#F5B400] font-medium">
                            {event.date.split(" - ")[0]}
                          </p>
                          <p className="text-xs text-white/30">
                            {event.date.split(" - ")[1]}
                          </p>
                        </div>
                      </div>

                      {/* Location Tag */}
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <MapPin className="h-3 w-3 text-white/30" />
                        <span className="text-xs text-white/50">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. MAP PLACEHOLDER (Visual Filler) */}
            <div className="h-64 w-full rounded-2xl overflow-hidden border border-white/10 relative group">
              {/* You would integrate Google Maps or Mapbox here */}
              <div className="absolute inset-0 bg-[#081f10] flex items-center justify-center flex-col gap-2">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                  <Globe className="h-6 w-6 text-[#F5B400]" />
                </div>
                <p className="text-white/30 text-sm">
                  Live Map View Unavailable
                </p>
              </div>
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px]"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
