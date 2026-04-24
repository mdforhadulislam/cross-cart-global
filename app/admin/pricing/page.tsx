import type { Metadata } from "next";
import { Plus, Edit, Trash2, DollarSign, Package, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Pricing | Admin - Cross Cart Global",
  description: "Manage shipping pricing in the admin panel.",
};

const pricing = [
  { id: 1, zone: "India", weight: "0.5 - 2 kg", express: "$25", standard: "$18", economy: "$12" },
  { id: 2, zone: "India", weight: "2 - 5 kg", express: "$45", standard: "$32", economy: "$22" },
  { id: 3, zone: "USA", weight: "0.5 - 2 kg", express: "$65", standard: "$48", economy: "$35" },
  { id: 4, zone: "USA", weight: "2 - 5 kg", express: "$95", standard: "$72", economy: "$55" },
  { id: 5, zone: "UK", weight: "0.5 - 2 kg", express: "$58", standard: "$42", economy: "$30" },
  { id: 6, zone: "UK", weight: "2 - 5 kg", express: "$85", standard: "$65", economy: "$48" },
  { id: 7, zone: "China", weight: "0.5 - 2 kg", express: "$35", standard: "$25", economy: "$18" },
  { id: 8, zone: "China", weight: "2 - 5 kg", express: "$55", standard: "$42", economy: "$30" },
];

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pricing Management</h2>
          <p className="text-gray-500 text-sm">Set and manage shipping rates by zone and weight</p>
        </div>
        <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
          <Plus className="mr-2 h-4 w-4" />
          Add New Rate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Active Rates</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Plane className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Countries Covered</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Weight Tiers</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Shipping Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Zone</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Weight Range</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Express</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Standard</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Economy</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((rate) => (
                  <tr key={rate.id} className="border-b">
                    <td className="px-4 py-3 font-medium">{rate.zone}</td>
                    <td className="px-4 py-3 text-gray-600">{rate.weight}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">{rate.express}</td>
                    <td className="px-4 py-3 font-semibold text-blue-600">{rate.standard}</td>
                    <td className="px-4 py-3 font-semibold text-gray-600">{rate.economy}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
