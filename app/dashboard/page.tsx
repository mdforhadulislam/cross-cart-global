"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Phone,
  Plus,
  Search,
  Eye,
  MoreVertical,
  MapPin,
  Clock3,
  Truck as TruckIcon,
  PackageCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const stats = [
  { title: "Total Shipments", value: "24", trend: "+12%", icon: Package, color: "bg-blue-500" },
  { title: "In Transit", value: "8", trend: "+3", icon: TruckIcon, color: "bg-orange-500" },
  { title: "Delivered", value: "15", trend: "+5", icon: CheckCircle2, color: "bg-green-500" },
  { title: "Pending", value: "1", trend: "-2", icon: Clock, color: "bg-yellow-500" },
];

const recentShipments = [
  { id: "CCG123456", destination: "India - Mumbai", status: "In Transit", date: "2026-04-15", weight: "2.5 kg", price: "$45.00", progress: 65 },
  { id: "CCG123455", destination: "USA - New York", status: "Delivered", date: "2026-04-14", weight: "1.2 kg", price: "$78.00", progress: 100 },
  { id: "CCG123454", destination: "UK - London", status: "Processing", date: "2026-04-13", weight: "5.0 kg", price: "$120.00", progress: 15 },
  { id: "CCG123453", destination: "China - Beijing", status: "Delivered", date: "2026-04-12", weight: "3.8 kg", price: "$65.00", progress: 100 },
  { id: "CCG123452", destination: "Canada - Toronto", status: "In Transit", date: "2026-04-11", weight: "2.0 kg", price: "$85.00", progress: 80 },
];

const quickActions = [
  { title: "New Shipment", icon: Plus, href: "/dashboard/shipments/new", color: "text-[#F5B400]" },
  { title: "Track Package", icon: Search, href: "/dashboard/track", color: "text-blue-600" },
  { title: "My Addresses", icon: MapPin, href: "/dashboard/addresses", color: "text-green-600" },
  { title: "Get Support", icon: Phone, href: "/dashboard/support", color: "text-purple-600" },
];

const popularRoutes = [
  { from: "Dhaka, Bangladesh", to: "Mumbai, India", price: "$25", days: "2-4" },
  { from: "Dhaka, Bangladesh", to: "New York, USA", price: "$65", days: "5-7" },
  { from: "Dhaka, Bangladesh", to: "London, UK", price: "$58", days: "4-6" },
  { from: "Dhaka, Bangladesh", to: "Dubai, UAE", price: "$35", days: "2-3" },
];

const notifications = [
  { id: 1, title: "Package Delivered", message: "Your shipment CCG123455 has been delivered", time: "2 hours ago", read: false, type: "delivery" },
  { id: 2, title: "In Transit", message: "Your shipment CCG123456 is on the way", time: "5 hours ago", read: false, type: "transit" },
  { id: 3, title: "Customs Cleared", message: "Your shipment has cleared customs", time: "1 day ago", read: true, type: "customs" },
];

export default function UserDashboardPage() {
  const [showQuickTrack, setShowQuickTrack] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Transit":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Processing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <PackageCheck className="h-4 w-4" />;
      case "In Transit":
        return <TruckIcon className="h-4 w-4" />;
      case "Processing":
        return <Clock3 className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Section - Mobile Friendly */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-[#0B2A4A] to-[#1a4a7a] rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
        <div className="flex items-center gap-3 md:gap-4">
          <Avatar className="h-12 w-12 md:h-16 md:w-16 border-2 border-[#F5B400]">
            <AvatarImage src="/api/placeholder/100/100" />
            <AvatarFallback className="bg-[#F5B400] text-[#0B2A4A] md:text-xl font-bold text-sm">JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg md:text-2xl font-bold">Welcome, John!</h2>
            <p className="text-white/70 text-sm">Here&apos;s your shipping overview</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => setShowQuickTrack(true)}
            variant="secondary" 
            className="bg-white/10 hover:bg-white/20 text-white border-0 text-sm py-2 h-auto"
          >
            <Search className="h-4 w-4 mr-2" />
            Quick Track
          </Button>
          <Link href="/dashboard/shipments/new" className="w-full sm:w-auto">
            <Button className="bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] w-full text-sm py-2 h-auto">
              <Plus className="h-4 w-4 mr-2" />
              New Shipment
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid - Mobile Friendly */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className={`h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl ${stat.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mt-1 text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Shipments - Mobile Friendly Card View */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b pb-3 md:pb-4 px-4 md:px-6">
          <div>
            <CardTitle className="text-lg md:text-xl">Recent Shipments</CardTitle>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Track your latest shipments</p>
          </div>
          <Link href="/dashboard/shipments">
            <Button variant="ghost" className="text-[#F5B400] text-xs md:text-sm p-1 md:p-0">
              View All
              <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold">Tracking ID</TableHead>
                  <TableHead className="font-semibold">Destination</TableHead>
                  <TableHead className="font-semibold">Progress</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentShipments.map((shipment) => (
                  <TableRow key={shipment.id} className="hover:bg-gray-50/50">
                    <TableCell className="font-semibold text-[#0B2A4A]">{shipment.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {shipment.destination}
                      </div>
                    </TableCell>
                    <TableCell className="w-32">
                      <div className="space-y-1">
                        <Progress value={shipment.progress} className="h-2" />
                        <span className="text-xs text-gray-500">{shipment.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(shipment.status)} border flex items-center gap-1 w-fit`}>
                        {getStatusIcon(shipment.status)}
                        {shipment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TruckIcon className="h-4 w-4 mr-2" />
                            Track Live
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Package className="h-4 w-4 mr-2" />
                            Download Label
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Mobile Card View */}
          <div className="md:hidden divide-y">
            {recentShipments.map((shipment) => (
              <div key={shipment.id} className="p-4 hover:bg-gray-50/50">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold text-[#0B2A4A] text-sm">{shipment.id}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3" />
                      {shipment.destination}
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(shipment.status)} border flex items-center gap-1 text-xs`}>
                    {getStatusIcon(shipment.status)}
                    {shipment.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Progress value={shipment.progress} className="h-1.5 w-20" />
                    <span className="text-xs text-gray-500">{shipment.progress}%</span>
                  </div>
                  <div className="flex gap-1">
                    <Link href={`/dashboard/track?tracking=${shipment.id}`}>
                      <Button variant="ghost" size="sm" className="h-7 text-xs p-1">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-xs">
                          <Eye className="h-3 w-3 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs">
                          <TruckIcon className="h-3 w-3 mr-2" />
                          Track Live
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications & Quick Actions - Mobile Friendly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Notifications - Mobile Card */}
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader className="border-b pb-3 md:pb-4 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg md:text-xl">Notifications</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Latest updates</p>
              </div>
              <Badge className="bg-[#F5B400] text-[#0a1a0f] text-xs">3 New</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-3 md:p-4 hover:bg-gray-50/50 cursor-pointer transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notification.type === 'delivery' ? 'bg-green-100' : 
                      notification.type === 'transit' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      {notification.type === 'delivery' && <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600" />}
                      {notification.type === 'transit' && <TruckIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />}
                      {notification.type === 'customs' && <Package className="h-4 w-4 md:h-5 md:w-5 text-yellow-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900 truncate text-sm">{notification.title}</p>
                        {!notification.read && (
                          <div className="h-2 w-2 bg-[#F5B400] rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 truncate">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard/notifications" className="block p-2 md:p-3 border-t">
              <Button variant="ghost" className="w-full text-[#F5B400] text-xs md:text-sm">
                View All Notifications
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Quick Actions - Mobile Grid */}
        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader className="border-b pb-3 md:pb-4 px-4 md:px-6">
            <CardTitle className="text-lg md:text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.title} href={action.href}>
                    <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-dashed border-gray-200 hover:border-[#F5B400] hover:bg-[#F5B400]/5 transition-all cursor-pointer group">
                      <div className={`h-10 w-10 md:h-14 md:w-14 rounded-xl bg-gray-100 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#F5B400]/10 transition-colors`}>
                        <Icon className={`h-5 w-5 md:h-7 md:w-7 ${action.color}`} />
                      </div>
                      <span className="font-medium text-gray-900 text-xs md:text-sm text-center">{action.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Routes - Mobile Friendly */}
      <Card>
        <CardHeader className="border-b pb-3 md:pb-4 px-4 md:px-6">
          <CardTitle className="text-lg md:text-xl">Popular Routes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {popularRoutes.map((route, index) => (
              <div key={index} className="p-3 md:p-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-sm">
                      <span className="font-medium text-gray-900">{route.from}</span>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-gray-400 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{route.to}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {route.days} Days
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-base md:text-lg text-[#F5B400]">{route.price}</p>
                    <Link href={`/dashboard/shipments/new?route=${index}`}>
                      <Button size="sm" className="bg-[#0B2A4A] hover:bg-[#0B2A4A]/90 text-xs">
                        Book
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Banner - Mobile Friendly */}
      <Card className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] border-0 text-white overflow-hidden relative">
        <CardContent className="p-4 md:p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
              <div className="h-12 w-12 md:h-16 md:w-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-1">Need Help?</h3>
                <p className="text-white/70 text-sm">Our support team is available 24/7</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
              <div className="text-center sm:text-right order-2 sm:order-1">
                <p className="text-xl md:text-3xl font-bold">+880 1410-144466</p>
                <p className="text-white/70 text-xs md:text-sm">Call Us Anytime</p>
              </div>
              <Link href="/dashboard/support" className="w-full sm:w-auto order-1 sm:order-2">
                <Button size="sm" className="bg-white text-[#7C3AED] hover:bg-white/90 w-full sm:w-auto">
                  Contact Support
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5"></div>
      </Card>

      {/* Quick Track Dialog */}
      <Dialog open={showQuickTrack} onOpenChange={setShowQuickTrack}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle>Quick Track Shipment</DialogTitle>
            <DialogDescription>
              Enter your tracking ID to see real-time updates
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter tracking ID (e.g., CCG123456)"
                className="pl-10 h-12"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowQuickTrack(false)}>
                Cancel
              </Button>
              <Button className="flex-1 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f]">
                Track Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
