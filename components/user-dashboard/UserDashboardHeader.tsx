"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserSidebar from "./UserSidebar";

export default function UserDashboardHeader() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname.startsWith("/dashboard/shipments/new")) return "Create New Shipment";
    if (pathname.startsWith("/dashboard/shipments")) return "My Shipments";
    if (pathname.startsWith("/dashboard/track")) return "Track Shipment";
    if (pathname.startsWith("/dashboard/addresses")) return "My Addresses";
    if (pathname.startsWith("/dashboard/orders")) return "Order History";
    if (pathname.startsWith("/dashboard/payments")) return "Payments";
    if (pathname.startsWith("/dashboard/notifications")) return "Notifications";
    if (pathname.startsWith("/dashboard/support")) return "Support";
    if (pathname.startsWith("/dashboard/settings")) return "Settings";
    return "Dashboard";
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
          <SheetContent side="left" className="p-0 w-64 bg-[#0B2A4A] border-r border-white/10">
            <UserSidebar />
          </SheetContent>
        </Sheet>
        
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{getPageTitle()}</h1>
          <p className="text-xs text-gray-500">Welcome back!</p>
        </div>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search shipments, orders..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#F5B400] text-[#0a1a0f] text-[10px]">
            3
          </Badge>
        </Button>
        
        <Link href="/dashboard/settings" className="flex items-center gap-2 ml-2">
          <div className="h-8 w-8 bg-[#F5B400] rounded-full flex items-center justify-center">
            <span className="text-[#0a1a0f] font-bold text-sm">JD</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
