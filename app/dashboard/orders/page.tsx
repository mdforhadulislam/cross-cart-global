import type { Metadata } from "next";
import { Download, Search, ShoppingCart, Calendar, Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Order History | Cross Cart Global",
  description: "View your complete order history with Cross Cart Global. Track past shipments and invoices.",
};

const orders = [
  { id: "ORD-2026-001", date: "2026-04-15", items: 3, total: "$156.00", status: "Completed" },
  { id: "ORD-2026-002", date: "2026-04-12", items: 1, total: "$45.00", status: "Completed" },
  { id: "ORD-2026-003", date: "2026-04-10", items: 5, total: "$289.00", status: "Processing" },
  { id: "ORD-2026-004", date: "2026-04-08", items: 2, total: "$78.00", status: "Completed" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Order History</h2>
          <p className="text-gray-500 text-sm">View and manage your orders</p>
        </div>
        <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm">
          <Download className="mr-2 h-4 w-4" />
          Download History
        </Button>
      </div>

      {/* Search - Mobile Friendly */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search orders..." className="pl-10 h-10 max-w-full" />
      </div>

      {/* Mobile Card View */}
      <div className="space-y-3 md:space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 md:h-12 md:w-12 bg-[#F5B400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">{order.id}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Calendar className="h-3 w-3" />
                      {order.date}
                    </div>
                  </div>
                </div>
                <Badge className={order.status === 'Completed' ? 'bg-green-100 text-green-700 text-xs' : 'bg-yellow-100 text-yellow-700 text-xs'}>
                  {order.status}
                </Badge>
              </div>
              
              {/* Order Details - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Items</p>
                  <p className="font-semibold text-lg">{order.items}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Total</p>
                  <p className="font-semibold text-lg text-[#F5B400]">{order.total}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm">
                  <Package className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  View Details
                </Button>
                <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats - Mobile Friendly */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <Card className="bg-[#0B2A4A] text-white">
          <CardContent className="p-4 text-center">
            <p className="text-white/70 text-sm">Total Orders</p>
            <p className="text-2xl md:text-3xl font-bold">{orders.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#F5B400]">
          <CardContent className="p-4 text-center">
            <p className="text-[#0B2A4A]/70 text-sm">Total Spent</p>
            <p className="text-2xl md:text-3xl font-bold text-[#0B2A4A]">$568</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
