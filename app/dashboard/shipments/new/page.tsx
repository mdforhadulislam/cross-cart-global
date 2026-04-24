import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, MapPin, Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Create New Shipment | Cross Cart Global",
  description: "Create a new shipment with Cross Cart Global. Quick and easy booking for international courier services.",
};

const popularDestinations = [
  { country: "India", cities: "Mumbai, Delhi, Kolkata", flag: "🇮🇳", price: "$25" },
  { country: "USA", cities: "New York, LA, Chicago", flag: "🇺🇸", price: "$65" },
  { country: "UK", cities: "London, Manchester", flag: "🇬🇧", price: "$58" },
  { country: "China", cities: "Beijing, Shanghai", flag: "🇨🇳", price: "$45" },
  { country: "UAE", cities: "Dubai, Abu Dhabi", flag: "🇦🇪", price: "$35" },
  { country: "Canada", cities: "Toronto, Vancouver", flag: "🇨🇦", price: "$72" },
];

export default function NewShipmentPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header - Mobile Friendly */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/dashboard/shipments">
          <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10">
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </Link>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Create New Shipment</h2>
          <p className="text-gray-500 text-sm">Fill in the details to book</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Sender Information - Mobile Friendly */}
          <Card>
            <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" />
                Sender Information
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" placeholder="Enter sender name" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+880 1XXX XXXXXX" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" placeholder="Enter email address" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pickup Address</label>
                <textarea placeholder="Enter complete pickup address" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]"></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Receiver Information - Mobile Friendly */}
          <Card>
            <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" />
                Receiver Information
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" placeholder="Enter receiver name" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+1 XXX XXX XXXX" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Country</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]">
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="china">China</option>
                    <option value="uae">UAE</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">City</label>
                  <input type="text" placeholder="Enter city" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Delivery Address</label>
                <textarea placeholder="Enter complete delivery address" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]"></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Package Details - Mobile Friendly */}
          <Card>
            <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Package className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" />
                Package Details
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6 space-y-4">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">Weight (kg)</label>
                  <input type="number" placeholder="0.0" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">Length (cm)</label>
                  <input type="number" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">Width (cm)</label>
                  <input type="number" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">Height (cm)</label>
                  <input type="number" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">Service Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]">
                    <option value="">Select Service</option>
                    <option value="express">Express (2-4 Days)</option>
                    <option value="standard">Standard (5-7 Days)</option>
                    <option value="economy">Economy (10-15 Days)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Package Description</label>
                <textarea placeholder="Describe your package contents" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#F5B400]/20 focus:border-[#F5B400]"></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <Link href="/dashboard/shipments">
              <Button variant="outline" className="w-full sm:w-auto text-sm">
                Cancel
              </Button>
            </Link>
            <Button className="w-full sm:w-auto bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] text-sm py-2">
              Calculate Price & Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar - Mobile Friendly */}
        <div className="space-y-4 md:space-y-6">
          {/* Delivery Times */}
          <Card>
            <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" />
                Estimated Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Express</span>
                  <Badge className="bg-green-100 text-green-700 text-xs">2-4 Days</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Standard</span>
                  <Badge className="bg-blue-100 text-blue-700 text-xs">5-7 Days</Badge>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Economy</span>
                  <Badge className="bg-gray-100 text-gray-700 text-xs">10-15 Days</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Destinations */}
          <Card>
            <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg">Popular Routes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {popularDestinations.map((dest) => (
                  <div key={dest.country} className="flex items-center justify-between p-3 md:p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{dest.flag}</span>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{dest.country}</p>
                        <p className="text-xs text-gray-500 hidden sm:block">{dest.cities}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#F5B400] text-sm">{dest.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Card - Mobile Friendly */}
          <Card className="bg-[#0B2A4A] border-0">
            <CardContent className="p-4 md:p-6 text-center">
              <Phone className="h-7 w-7 md:h-8 md:w-8 text-[#F5B400] mx-auto mb-3" />
              <p className="text-white/80 text-sm mb-2">Need help with booking?</p>
              <p className="text-[#F5B400] font-bold text-base md:text-lg">+880 1410-144466</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
