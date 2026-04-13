"use client";

import {
  AlertCircle,
  Box,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  FileText,
  Globe,
  HelpCircle,
  Home,
  Info,
  Loader2,
  MapPin,
  Package,
  Phone,
  Plane,
  RefreshCw,
  Search,
  Share2,
  Shield,
  Truck,
  Weight,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";

interface TrackingEvent {
  id: string;
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
  icon: React.ElementType;
  isActive: boolean;
  isCompleted: boolean;
}

interface TrackingData {
  trackingNumber: string;
  carrier: string;
  status:
    | "Pending"
    | "Picked Up"
    | "In Transit"
    | "Out for Delivery"
    | "Delivered"
    | "Exception";
  estimatedDelivery: string;
  actualDelivery?: string;
  origin: {
    city: string;
    country: string;
    code: string;
  };
  destination: {
    city: string;
    country: string;
    code: string;
  };
  shipmentType: string;
  weight: string;
  dimensions: string;
  pieces: number;
  serviceType: string;
  paymentMethod: string;
  codAmount?: string;
  lastUpdate: string;
  events: TrackingEvent[];
}

const MOCK_TRACKING_DATA: TrackingData = {
  trackingNumber: "CC-8849201-BD",
  carrier: "Cross Cart Global",
  status: "In Transit",
  estimatedDelivery: "Oct 24, 2023",
  origin: {
    city: "New York",
    country: "USA",
    code: "JFK",
  },
  destination: {
    city: "Dhaka",
    country: "Bangladesh",
    code: "DAC",
  },
  shipmentType: "Documents",
  weight: "4.5 kg",
  dimensions: "30x20x15 cm",
  pieces: 1,
  serviceType: "Express Air Freight",
  paymentMethod: "Prepaid",
  lastUpdate: "Oct 22, 2023 14:30",
  events: [
    {
      id: "1",
      date: "Oct 22, 2023",
      time: "14:30",
      status: "Out for Delivery",
      location: "Dhaka Hub, Gulshan-1",
      description: "Package is with the courier for final delivery",
      icon: Truck,
      isActive: true,
      isCompleted: true,
    },
    {
      id: "2",
      date: "Oct 21, 2023",
      time: "09:15",
      status: "Arrived at Destination",
      location: "Hazrat Shahjalal Int. Airport, DAC",
      description: "Customs clearance processing started",
      icon: Globe,
      isActive: false,
      isCompleted: true,
    },
    {
      id: "3",
      date: "Oct 20, 2023",
      time: "18:00",
      status: "Departed Origin",
      location: "JFK Airport, New York",
      description: "Flight EK-586 departed for Dhaka",
      icon: Plane,
      isActive: false,
      isCompleted: true,
    },
    {
      id: "4",
      date: "Oct 19, 2023",
      time: "11:20",
      status: "Picked Up",
      location: "Manhattan, NY",
      description: "Package collected from sender",
      icon: Package,
      isActive: false,
      isCompleted: true,
    },
    {
      id: "5",
      date: "Oct 18, 2023",
      time: "16:45",
      status: "Shipment Created",
      location: "Cross Cart System",
      description: "Shipping label generated, awaiting pickup",
      icon: FileText,
      isActive: false,
      isCompleted: true,
    },
  ],
};

const STATUS_CONFIG = {
  Pending: {
    color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    icon: Clock,
    progress: 0,
  },
  "Picked Up": {
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: Package,
    progress: 25,
  },
  "In Transit": {
    color: "bg-[#F5B400]/10 text-[#F5B400] border-[#F5B400]/20",
    icon: Plane,
    progress: 50,
  },
  "Out for Delivery": {
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Truck,
    progress: 75,
  },
  Delivered: {
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: CheckCircle2,
    progress: 100,
  },
  Exception: {
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: AlertCircle,
    progress: -1,
  },
};

export default function TrackClient() {
  const [trackingId, setTrackingId] = useState("");
  const [data, setData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState("");
  const [showNotFound, setShowNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setError("");
    setShowNotFound(false);
    setData(null);
    setLoadingProgress(0);

    // Simulate progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2500));

    clearInterval(progressInterval);
    setLoadingProgress(100);

    setTimeout(() => {
      // For demo: accepts any ID with 6+ chars or specific demo ID
      if (
        trackingId.toUpperCase() === "CC-8849201-BD" ||
        trackingId.trim().length >= 6
      ) {
        setData(MOCK_TRACKING_DATA);
        setShowNotFound(false);
      } else {
        setError("Please enter a valid tracking number (min 6 characters)");
        setShowNotFound(true);
        setData(null);
      }
      setLoading(false);
      setLoadingProgress(0);
    }, 300);
  };

  const handleCopy = () => {
    if (data) {
      navigator.clipboard.writeText(data.trackingNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (data && navigator.share) {
      navigator.share({
        title: `Track ${data.trackingNumber}`,
        text: `Track your shipment ${data.trackingNumber} from ${data.origin.city} to ${data.destination.city}`,
        url: window.location.href,
      });
    }
  };

  const getStatusConfig = (status: string) => {
    return (
      STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ||
      STATUS_CONFIG.Pending
    );
  };

  return (
    <div className="min-h-screen bg-white pt-8 pb-16 px-5">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-4">
            <Package className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Real-time Tracking
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Track Your <span className="text-[#F5B400]">Shipment</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Enter your tracking number to get instant updates on your shipment
            location and delivery status
          </p>
        </div>

        {/* SEARCH BOX */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F5B400] via-[#E5A500] to-[#F5B400] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative flex bg-white rounded-xl p-2 border border-gray-200">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900/40 h-5 w-5" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Tracking ID (e.g. CC-8849201-BD)"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-300 rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5B400]/50 transition-all text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !trackingId.trim()}
                className="h-14 px-8 bg-gradient-to-r from-[#F5B400] to-[#E5A500] hover:from-[#E5A500] hover:to-[#D49400] text-[#0a1a0f] font-bold rounded-lg transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-[#F5B400]/20"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Track
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Loading Progress Bar */}
          {loading && (
            <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F5B400] to-[#E5A500] transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          )}

          {/* Loading Message */}
          {loading && (
            <div className="mt-4 flex items-center justify-center gap-3 text-gray-900/60">
              <Loader2 className="h-5 w-5 animate-spin text-[#F5B400]" />
              <span className="text-sm">
                Searching for shipment information...
              </span>
            </div>
          )}

          {error && (
            <p className="mt-3 text-red-400 text-sm flex items-center gap-2 justify-center">
              <AlertCircle className="h-4 w-4" /> {error}
            </p>
          )}
        </form>

        {/* NOT FOUND STATE */}
        {showNotFound && !loading && (
          <div className="animate-fade-in">
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-10 w-10 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tracking Not Found
              </h2>
              <p className="text-gray-900/50 mb-6">
                We couldn{"'"}t find a shipment with this tracking number.
                Please verify your tracking ID and try again.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-gray-100 rounded-xl p-4 text-left w-full max-w-md">
                  <h4 className="text-gray-900 font-semibold text-sm mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-[#F5B400]" />
                    Need Help?
                  </h4>
                  <ul className="text-gray-900/50 text-sm space-y-1">
                    <li>• Check your email for the correct tracking number</li>
                    <li>• Tracking numbers are 8-20 characters long</li>
                    <li>• Try using the prefix CC- if you haven{"'"}t</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="px-6 py-3 bg-[#F5B400]/10 border border-[#F5B400]/30 text-[#F5B400] font-semibold rounded-lg hover:bg-[#F5B400]/20 transition-all flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Contact Support
                </button>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-6 py-3 bg-gray-100 border border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TRACKING RESULTS */}
        {data && !loading && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Status Progress Bar */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border ${getStatusConfig(data.status).color}`}
                  >
                    {data.status}
                  </div>
                  <span className="text-gray-900/30 text-sm">
                    Last updated: {data.lastUpdate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-white/10 text-gray-900/60 hover:text-gray-900 transition-all"
                    title="Copy Tracking ID"
                  >
                    {copied ? (
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-white/10 text-gray-900/60 hover:text-gray-900 transition-all"
                    title="Share"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="relative">
                <div className="absolute top-5 left-0 right-0 h-1 bg-white/10 rounded-full" />
                <div
                  className="absolute top-5 left-0 h-1 bg-gradient-to-r from-[#F5B400] to-[#E5A500] rounded-full transition-all duration-500"
                  style={{ width: `${getStatusConfig(data.status).progress}%` }}
                />
                <div className="relative flex justify-between">
                  {[
                    "Created",
                    "Picked Up",
                    "In Transit",
                    "Out for Delivery",
                    "Delivered",
                  ].map((step, index) => {
                    const progress = (index + 1) * 20;
                    const isActive =
                      getStatusConfig(data.status).progress >= progress;
                    const isCurrent =
                      getStatusConfig(data.status).progress === progress;
                    return (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                            isActive
                              ? "bg-[#F5B400] border-[#F5B400] text-[#0a1a0f]"
                              : "bg-gray-100 border-gray-200 text-gray-900/40"
                          }`}
                        >
                          {isActive && !isCurrent ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-xs mt-2 ${isActive ? "text-gray-900" : "text-gray-900/40"}`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Info Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Shipment Info */}
              <div className="lg:col-span-2 bg-gray-100 border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-[#F5B400]/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-[#F5B400]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">
                      Shipment Details
                    </h3>
                    <p className="text-gray-900/50 text-sm">
                      {data.trackingNumber}
                    </p>
                  </div>
                </div>

                {/* Route Display */}
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-900/40 text-xs uppercase tracking-wider mb-1">
                      From
                    </p>
                    <p className="text-gray-900 font-bold">{data.origin.city}</p>
                    <p className="text-gray-900/50 text-sm">
                      {data.origin.country}
                    </p>
                    <p className="text-[#F5B400] text-sm font-mono mt-1">
                      {data.origin.code}
                    </p>
                  </div>
                  <div className="flex-1 px-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-[#F5B400]" />
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#F5B400] to-[#E5A500]" />
                      <Plane className="h-5 w-5 text-[#F5B400]" />
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#E5A500] to-white/20" />
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-900/40 text-xs uppercase tracking-wider mb-1">
                      To
                    </p>
                    <p className="text-gray-900 font-bold">
                      {data.destination.city}
                    </p>
                    <p className="text-gray-900/50 text-sm">
                      {data.destination.country}
                    </p>
                    <p className="text-gray-900/40 text-sm font-mono mt-1">
                      {data.destination.code}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Box className="h-4 w-4 text-gray-900/40" />
                      <span className="text-gray-900/40 text-xs uppercase tracking-wider">
                        Shipment Type
                      </span>
                    </div>
                    <p className="text-gray-900 font-semibold">
                      {data.shipmentType}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Weight className="h-4 w-4 text-gray-900/40" />
                      <span className="text-gray-900/40 text-xs uppercase tracking-wider">
                        Weight
                      </span>
                    </div>
                    <p className="text-gray-900 font-semibold">{data.weight}</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-gray-900/40" />
                      <span className="text-gray-900/40 text-xs uppercase tracking-wider">
                        Pieces
                      </span>
                    </div>
                    <p className="text-gray-900 font-semibold">
                      {data.pieces} Piece(s)
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-gray-900/40" />
                      <span className="text-gray-900/40 text-xs uppercase tracking-wider">
                        Service
                      </span>
                    </div>
                    <p className="text-gray-900 font-semibold text-sm">
                      {data.serviceType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-6">
                {/* Estimated Delivery */}
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[#F5B400]/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-[#F5B400]" />
                    </div>
                    <div>
                      <p className="text-gray-900/40 text-xs uppercase tracking-wider">
                        Estimated Delivery
                      </p>
                      <p className="text-gray-900 font-bold text-lg">
                        {data.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-900/50 text-sm mb-2">
                      <Clock className="h-4 w-4" />
                      <span>Carrier</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{data.carrier}</p>
                    <p className="text-gray-900/50 text-sm mt-1">
                      {data.paymentMethod}
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-gray-900 font-semibold mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-100 hover:bg-white/10 text-gray-900/70 hover:text-gray-900 transition-all">
                      <Phone className="h-5 w-5 text-[#F5B400]" />
                      <span className="text-sm">Call Support</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-100 hover:bg-white/10 text-gray-900/70 hover:text-gray-900 transition-all">
                      <Info className="h-5 w-5 text-[#F5B400]" />
                      <span className="text-sm">Get Help</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-[#F5B400]" />
                  Shipment History
                </h3>
                <span className="text-gray-900/40 text-sm">
                  {data.events.length} Events
                </span>
              </div>

              <div className="relative">
                {data.events.map((event, index) => {
                  const Icon = event.icon;
                  const isLast = index === data.events.length - 1;

                  return (
                    <div
                      key={event.id}
                      className={`relative ${isLast ? "" : "pb-10"}`}
                    >
                      {/* Connection Line */}
                      {!isLast && (
                        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#F5B400]/50 to-white/10" />
                      )}

                      <div className="flex gap-4">
                        {/* Icon */}
                        <div
                          className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                            event.isActive
                              ? "bg-[#F5B400] text-[#0a1a0f] shadow-lg shadow-[#F5B400]/30"
                              : event.isCompleted
                                ? "bg-[#F5B400]/20 text-[#F5B400]"
                                : "bg-white/10 text-gray-900/30"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {event.isActive && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-[#F5B400]/30" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <div>
                              <h4
                                className={`font-semibold ${
                                  event.isActive
                                    ? "text-gray-900"
                                    : event.isCompleted
                                      ? "text-gray-900/80"
                                      : "text-gray-900/40"
                                }`}
                              >
                                {event.status}
                              </h4>
                              <p className="text-gray-900/50 text-sm mt-1">
                                {event.description}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p
                                className={`text-sm font-medium ${event.isActive ? "text-[#F5B400]" : "text-gray-900/50"}`}
                              >
                                {event.date}
                              </p>
                              <p className="text-gray-900/30 text-xs">
                                {event.time}
                              </p>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mt-2">
                            <MapPin className="h-3 w-3 text-gray-900/40" />
                            <span className="text-gray-900/50 text-xs">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-[#F5B400]/10 to-transparent border border-[#F5B400]/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#F5B400]/20 flex items-center justify-center shrink-0">
                  <Info className="h-5 w-5 text-[#F5B400]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-2">
                    Tracking Tips
                  </h4>
                  <ul className="text-gray-900/50 text-sm space-y-1">
                    <li>
                      • Updates may take 24-48 hours to reflect after pickup
                    </li>
                    <li>
                      • Contact support if no updates for more than 3 days
                    </li>
                    <li>
                      • Download our app for push notifications on your shipment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Initial State - When no search */}
        {!data && !loading && !showNotFound && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-900/20" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enter Tracking Number
              </h3>
              <p className="text-gray-900/50 text-sm mb-8">
                Type your tracking number above to see real-time updates on your
                shipment
              </p>

              {/* Sample IDs */}
              <div className="bg-gray-100 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900/40 text-xs uppercase tracking-wider mb-3">
                  Try these sample tracking IDs:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["CC-8849201-BD", "CC-1234567-BD", "CC-9876543-IN"].map(
                    (id) => (
                      <button
                        key={id}
                        onClick={() => setTrackingId(id)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-white/10 border border-gray-200 rounded-lg text-gray-900/60 hover:text-gray-900 text-sm font-mono transition-all"
                      >
                        {id}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
