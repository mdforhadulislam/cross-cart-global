import type { Metadata } from "next";
import { Plus, MapPin, Edit, Trash2, Home, Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "My Addresses | Cross Cart Global",
  description: "Manage your saved pickup and delivery addresses for faster shipment booking.",
};

const addresses = [
  { id: 1, type: "home", name: "Home", address: "123 Main Street, Gulshan-2, Dhaka 1212", phone: "+880 1712-345678", isDefault: true },
  { id: 2, type: "office", name: "Office", address: "456 Business Center, Motijheel, Dhaka 1000", phone: "+880 1812-345678", isDefault: false },
  { id: 3, type: "other", name: "Warehouse", address: "789 Storage Area, Mirpur, Dhaka 1216", phone: "+880 1912-345678", isDefault: false },
];

export default function AddressesPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">My Addresses</h2>
          <p className="text-gray-500 text-sm">Manage your saved addresses</p>
        </div>
        <Button size="sm" className="w-full sm:w-auto bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f]">
          <Plus className="mr-2 h-4 w-4" />
          Add Address
        </Button>
      </div>

      {/* Mobile Stack View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {addresses.map((addr) => (
          <Card key={addr.id} className={`relative ${addr.isDefault ? 'ring-2 ring-[#F5B400]' : ''}`}>
            {addr.isDefault && (
              <Badge className="absolute top-3 right-3 bg-[#F5B400] text-[#0a1a0f] text-xs">
                Default
              </Badge>
            )}
            <CardHeader className="pb-2 px-4 pt-4 md:p-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                {addr.type === 'home' ? <Home className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" /> : <Building className="h-4 w-4 md:h-5 md:w-5 text-[#F5B400]" />}
                {addr.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 md:p-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{addr.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{addr.phone}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm">
                  <Edit className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2 md:px-3">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Address Card - Mobile Friendly */}
      <Card className="border-dashed border-2 hover:border-[#F5B400] transition-colors cursor-pointer">
        <CardContent className="p-6 md:p-8 flex flex-col items-center justify-center">
          <div className="h-14 w-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="h-7 w-7 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium">Add New Address</p>
          <p className="text-sm text-gray-400 mt-1">Save pickup or delivery locations</p>
        </CardContent>
      </Card>
    </div>
  );
}
