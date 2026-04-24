"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AdminSidebar from "./AdminSidebar";

export default function AdminDashboardHeader() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    if (pathname === "/admin") return "Admin Dashboard";
    if (pathname.startsWith("/admin/orders")) return "Order Management";
    if (pathname.startsWith("/admin/shipments")) return "Shipment Management";
    if (pathname.startsWith("/admin/pickups")) return "Pickup Requests";
    if (pathname.startsWith("/admin/users")) return "User Management";
    if (pathname.startsWith("/admin/pricing")) return "Pricing Management";
    if (pathname.startsWith("/admin/zones")) return "Zone Management";
    if (pathname.startsWith("/admin/tracking")) return "Tracking Updates";
    if (pathname.startsWith("/admin/reports")) return "Reports & Analytics";
    if (pathname.startsWith("/admin/tickets")) return "Support Tickets";
    if (pathname.startsWith("/admin/payments")) return "Payment Management";
    if (pathname.startsWith("/admin/notifications")) return "Notifications";
    if (pathname.startsWith("/admin/settings")) return "Settings";
    if (pathname.startsWith("/admin/activity")) return "Activity Logs";
    return "Admin";
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-gradient-to-b from-[#DC2626] to-[#991B1B] border-r border-white/10">
            <AdminSidebar />
          </SheetContent>
        </Sheet>
        
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{getPageTitle()}</h1>
          <p className="text-xs text-gray-500">Cross Cart Global Admin</p>
        </div>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search orders, users..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#DC2626] text-white text-[10px]">
            8
          </Badge>
        </Button>
        
        <Link href="/admin/settings" className="flex items-center gap-2 ml-2">
          <div className="h-8 w-8 bg-[#DC2626] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SA</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Super Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
