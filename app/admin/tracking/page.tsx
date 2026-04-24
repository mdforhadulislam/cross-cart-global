import type { Metadata } from "next";
import { Search, MapPin, Check, Truck, Package, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tracking Updates | Admin - Cross Cart Global",
  description: "Update shipment tracking status in the admin panel.",
};

const shipments = [
  { id: "CCG123456", status: "In Transit", location: "Mumbai Hub", next: "Out for Delivery", date: "2026-04-17 09:30" },
  { id: "CCG123454", status: "Customs", location: "London Customs", next: "Clearance in Progress", date: "2026-04-17 08:15" },
  { id: "CCG123452", status: "In Transit", location: "Dubai Hub", next: "Customs Clearance", date: "2026-04-17 07:45" },
  { id: "CCG123450", status: "Processing", location: "Dhaka Warehouse", next: "Pickup Scheduled", date: "2026-04-17 06:00" },
];

const updateStatus = [
  { id: 1, label: "Order Received", icon: Package },
  { id: 2, label: "Pickup Scheduled", icon: Truck },
  { id: 3, label: "Picked Up", icon: Check },
  { id: 4, label: "In Transit", icon: MapPin },
  { id: 5, label: "Customs", icon: AlertCircle },
  { id: 6, label: "Out for Delivery", icon: Truck },
  { id: 7, label: "Delivered", icon: Check },
];

export default function TrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Tracking Updates</h2>
        <p className="text-gray-500 text-sm">Update shipment status and location</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Update Shipment Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Enter tracking ID..." className="pl-10" />
            </div>
            <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shipment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Tracking ID</p>
                <p className="font-semibold text-[#DC2626]">CCG123456</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Status</p>
                <Badge className="bg-blue-100 text-blue-700">In Transit</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Location</p>
                <p className="font-medium">Mumbai Hub</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="font-medium">2026-04-17 09:30</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Origin</p>
                <p className="font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <p className="font-medium">Mumbai, India</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Update Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {updateStatus.map((status, index) => {
                const Icon = status.icon;
                return (
                  <div key={status.id} className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${index === 3 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className={`text-sm ${index === 3 ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                      {status.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#DC2626]/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{shipment.id}</p>
                    <p className="text-sm text-gray-500">{shipment.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : shipment.status === 'Customs' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}>
                    {shipment.status}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{shipment.date}</p>
                </div>
                <Button size="sm" variant="outline">Update</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
