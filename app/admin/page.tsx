import type { Metadata } from "next";
import { Package, ShoppingCart, Users, DollarSign, Truck, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Admin Dashboard | Cross Cart Global",
  description: "Cross Cart Global Admin Dashboard - Manage orders, shipments, users, and more.",
};

const stats = [
  { title: "Total Orders", value: "1,234", icon: ShoppingCart, trend: "+15%", color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Active Shipments", value: "456", icon: Package, trend: "+8%", color: "text-orange-600", bg: "bg-orange-100" },
  { title: "Total Users", value: "3,567", icon: Users, trend: "+12%", color: "text-purple-600", bg: "bg-purple-100" },
  { title: "Revenue", value: "$89,450", icon: DollarSign, trend: "+23%", color: "text-green-600", bg: "bg-green-100" },
];

const recentOrders = [
  { id: "ORD-2026-001", customer: "Ahmed Trading", destination: "India - Mumbai", amount: "$450", status: "Processing", date: "2026-04-17" },
  { id: "ORD-2026-002", customer: "Global Fashion", destination: "USA - New York", amount: "$850", status: "Shipped", date: "2026-04-17" },
  { id: "ORD-2026-003", customer: "Tech Solutions", destination: "UK - London", amount: "$320", status: "Delivered", date: "2026-04-16" },
  { id: "ORD-2026-004", customer: "Export House", destination: "China - Beijing", amount: "$1,200", status: "Processing", date: "2026-04-16" },
  { id: "ORD-2026-005", customer: "Textile Mills", destination: "UAE - Dubai", amount: "$580", status: "Pending", date: "2026-04-15" },
];

const supportTickets = [
  { id: "TKT-001", subject: "Tracking Issue - CCG123456", customer: "John Doe", status: "Open", priority: "High" },
  { id: "TKT-002", subject: "Refund Request", customer: "Jane Smith", status: "Open", priority: "Medium" },
  { id: "TKT-003", subject: "Delivery Delay Complaint", customer: "Bob Wilson", status: "In Progress", priority: "Low" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-500 text-sm">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">View Analytics</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.trend} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Orders</CardTitle>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm" className="text-[#DC2626]">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium text-[#DC2626]">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.destination}</TableCell>
                    <TableCell className="font-semibold">{order.amount}</TableCell>
                    <TableCell>
                      <Badge className={order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}>
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{ticket.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">{ticket.customer}</p>
                  </div>
                  <Badge className={ticket.priority === 'High' ? 'bg-red-100 text-red-700' : ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}>
                    {ticket.priority}
                  </Badge>
                </div>
              </div>
            ))}
            <Link href="/admin/tickets">
              <Button variant="outline" className="w-full">View All Tickets</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-green-600">Delivered Today</p>
              <p className="text-2xl font-bold text-green-700">28</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-600">In Transit</p>
              <p className="text-2xl font-bold text-blue-700">156</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-yellow-600">Pending Pickups</p>
              <p className="text-2xl font-bold text-yellow-700">12</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
