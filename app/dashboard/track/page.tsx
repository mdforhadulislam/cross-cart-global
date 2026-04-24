import type { Metadata } from "next";
import Link from "next/link";
import { Search, Package, MapPin, CheckCircle2, Truck, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "Track Shipment | Cross Cart Global",
  description: "Track your Cross Cart Global shipment in real-time. Enter your tracking number to get instant delivery updates.",
};

export default function TrackPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
      {/* Header - Mobile Friendly */}
      <div className="text-center space-y-2 md:space-y-4 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Track Your Shipment</h2>
        <p className="text-gray-500 text-sm md:text-base">Enter your tracking number to get real-time updates</p>
      </div>

      {/* Search Card - Mobile Friendly */}
      <Card className="mx-4 md:mx-0 p-4 md:p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
            <Input 
              placeholder="Enter tracking number..." 
              className="pl-10 md:pl-12 h-11 md:h-12 text-base"
              defaultValue="CCG123456"
            />
          </div>
          <Button className="h-11 md:h-12 px-6 md:px-8 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] font-semibold">
            Track
          </Button>
        </div>
      </Card>

      {/* Tracking Result Card - Mobile Friendly */}
      <Card className="mx-4 md:mx-0 overflow-hidden">
        <CardHeader className="bg-[#0B2A4A] text-white rounded-t-lg p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-white/70 text-xs md:text-sm">Tracking Number</p>
              <CardTitle className="text-lg md:text-xl text-white">CCG123456</CardTitle>
            </div>
            <Badge className="bg-[#F5B400] text-[#0a1a0f] font-semibold text-xs md:text-sm w-fit">
              In Transit
            </Badge>
          </div>
          {/* Progress Bar - Mobile */}
          <div className="mt-4 hidden sm:block">
            <div className="flex justify-between text-xs text-white/70 mb-2">
              <span>Picked Up</span>
              <span>In Transit</span>
              <span>Customs</span>
              <span>Delivered</span>
            </div>
            <Progress value={65} className="h-2 bg-white/20" />
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          {/* Quick Info Grid - Mobile Friendly */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Origin</p>
              <p className="font-medium text-sm">Dhaka, BD</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Destination</p>
              <p className="font-medium text-sm">Mumbai, India</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Est. Delivery</p>
              <p className="font-medium text-sm">Apr 20, 2026</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Weight</p>
              <p className="font-medium text-sm">2.5 kg</p>
            </div>
          </div>

          {/* Timeline - Mobile Friendly */}
          <div className="relative">
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6 md:space-y-8">
              {/* Step 1 - Completed */}
              <div className="relative flex gap-3 md:gap-4">
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-green-500 flex items-center justify-center z-10 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-gray-900 text-sm md:text-base">Package Received at Mumbai Hub</p>
                  <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    April 17, 2026 - 09:30 AM
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Package has arrived at the Mumbai distribution center</p>
                </div>
              </div>

              {/* Step 2 - Current */}
              <div className="relative flex gap-3 md:gap-4">
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-blue-500 flex items-center justify-center z-10 flex-shrink-0 animate-pulse">
                  <Truck className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900 text-sm md:text-base">Out for Delivery</p>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Current</Badge>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    April 17, 2026 - 06:00 AM
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Package is out for delivery and will arrive today</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-3 md:gap-4">
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-blue-500/50 flex items-center justify-center z-10 flex-shrink-0">
                  <Package className="h-3 w-3 md:h-4 md:w-4 text-white/50" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-gray-400 text-sm md:text-base">In Transit to Mumbai</p>
                  <p className="text-xs md:text-sm text-gray-400 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    April 16, 2026 - 02:15 PM
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">Package is on the way to Mumbai via air freight</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-3 md:gap-4">
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-green-500/50 flex items-center justify-center z-10 flex-shrink-0">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white/50" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-gray-400 text-sm md:text-base">Cleared Customs</p>
                  <p className="text-xs md:text-sm text-gray-400 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    April 16, 2026 - 10:00 AM
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">Customs clearance completed successfully</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-3 md:gap-4">
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-green-500 flex items-center justify-center z-10 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm md:text-base">Shipment Picked Up</p>
                  <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    April 15, 2026 - 11:30 AM
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Package picked up from sender in Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Banner - Mobile Friendly */}
          <div className="mt-6 md:mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-gray-700">Need help with this shipment?</p>
                <p className="text-xs text-gray-500">Contact our support team for assistance</p>
              </div>
              <Link href="/dashboard/support" className="w-full sm:w-auto">
                <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm">
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
