import type { Metadata } from "next";
import { Plus, Edit, Trash2, MapPin, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Zones | Admin - Cross Cart Global",
  description: "Manage shipping zones in the admin panel.",
};

const zones = [
  { id: 1, name: "South Asia", countries: ["India", "Pakistan", "Sri Lanka", "Nepal"], baseRate: "$15", transitTime: "3-5 days", status: "Active" },
  { id: 2, name: "East Asia", countries: ["China", "Japan", "South Korea", "Taiwan"], baseRate: "$25", transitTime: "5-7 days", status: "Active" },
  { id: 3, name: "North America", countries: ["USA", "Canada"], baseRate: "$45", transitTime: "7-10 days", status: "Active" },
  { id: 4, name: "Europe", countries: ["UK", "Germany", "France", "Italy", "Spain"], baseRate: "$40", transitTime: "5-8 days", status: "Active" },
  { id: 5, name: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"], baseRate: "$35", transitTime: "4-6 days", status: "Active" },
  { id: 6, name: "Oceania", countries: ["Australia", "New Zealand"], baseRate: "$55", transitTime: "8-12 days", status: "Active" },
  { id: 7, name: "Africa", countries: ["South Africa", "Kenya", "Nigeria"], baseRate: "$50", transitTime: "7-10 days", status: "Inactive" },
];

export default function ZonesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Zone Management</h2>
          <p className="text-gray-500 text-sm">Manage shipping zones and coverage areas</p>
        </div>
        <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Zone
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Total Zones</p>
              <p className="text-2xl font-bold">{zones.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Countries Covered</p>
              <p className="text-2xl font-bold">28</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Active Zones</p>
              <p className="text-2xl font-bold">{zones.filter(z => z.status === 'Active').length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {zones.map((zone) => (
          <Card key={zone.id} className={zone.status === 'Inactive' ? 'opacity-60' : ''}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#DC2626]" />
                {zone.name}
              </CardTitle>
              <Badge className={zone.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                {zone.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Countries</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {zone.countries.map((country) => (
                      <Badge key={country} variant="outline" className="text-xs">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Base Rate</p>
                    <p className="font-semibold text-lg">${zone.baseRate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Transit Time</p>
                    <p className="font-medium text-sm">{zone.transitTime}</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
