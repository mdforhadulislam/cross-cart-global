"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CRMSidebar from "./CRMSidebar";

export default function CRMDashboardHeader() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    if (pathname === "/crm") return "CRM Dashboard";
    if (pathname.startsWith("/crm/leads")) return "Lead Management";
    if (pathname.startsWith("/crm/customers")) return "Customer Management";
    if (pathname.startsWith("/crm/tasks")) return "Tasks & Follow-ups";
    if (pathname.startsWith("/crm/calls")) return "Call Logs";
    if (pathname.startsWith("/crm/quotations")) return "Quotations";
    if (pathname.startsWith("/crm/reports")) return "Reports";
    if (pathname.startsWith("/crm/settings")) return "CRM Settings";
    return "CRM";
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
          <SheetContent side="left" className="p-0 w-64 bg-gradient-to-b from-[#7C3AED] to-[#5B21B6] border-r border-white/10">
            <CRMSidebar />
          </SheetContent>
        </Sheet>
        
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{getPageTitle()}</h1>
          <p className="text-xs text-gray-500">CRM Team Portal</p>
        </div>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search leads, customers..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#7C3AED] text-white text-[10px]">
            5
          </Badge>
        </Button>
        
        <Link href="/crm/settings" className="flex items-center gap-2 ml-2">
          <div className="h-8 w-8 bg-[#7C3AED] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">RJ</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Rahim Khan</p>
            <p className="text-xs text-gray-500">CRM Manager</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
