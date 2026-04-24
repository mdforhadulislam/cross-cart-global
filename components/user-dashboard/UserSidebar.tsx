"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MapPin,
  ShoppingCart,
  CreditCard,
  Bell,
  Settings,
  HeadphonesIcon,
  Truck,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Shipments",
    href: "/dashboard/shipments",
    icon: Package,
  },
  {
    title: "Create Shipment",
    href: "/dashboard/shipments/new",
    icon: Truck,
  },
  {
    title: "Track Shipment",
    href: "/dashboard/track",
    icon: Package,
  },
  {
    title: "My Addresses",
    href: "/dashboard/addresses",
    icon: MapPin,
  },
  {
    title: "Order History",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: HeadphonesIcon,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function UserSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "sticky top-0 h-screen bg-[#0B2A4A] border-r border-white/10 flex flex-col transition-all duration-300 z-50",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          {!collapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#F5B400] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1a0f] font-bold text-sm">CC</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-sm leading-tight">Cross Cart</h2>
                <p className="text-white/50 text-[10px]">Dashboard</p>
              </div>
            </Link>
          )}
          {collapsed && (
            <div className="h-8 w-8 bg-[#F5B400] rounded-lg flex items-center justify-center mx-auto">
              <span className="text-[#0a1a0f] font-bold text-sm">CC</span>
            </div>
          )}
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            const Icon = link.icon;
            return (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                      isActive
                        ? "bg-[#F5B400] text-[#0a1a0f]"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className={cn("h-5 w-5 flex-shrink-0", collapsed && "mx-auto")} />
                    {!collapsed && (
                      <span className="font-medium text-sm">{link.title}</span>
                    )}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    <p>{link.title}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-2">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-white/70 hover:text-white hover:bg-white/10",
              collapsed && "justify-center px-0"
            )}
          >
            <User className={cn("h-5 w-5", !collapsed && "mr-3")} />
            {!collapsed && <span className="text-sm">Profile</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10",
              collapsed && "justify-center px-0"
            )}
          >
            <LogOut className={cn("h-5 w-5", !collapsed && "mr-3")} />
            {!collapsed && <span className="text-sm">Logout</span>}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "w-full text-white/50 hover:text-white hover:bg-white/10 mt-2",
              collapsed && "px-0"
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4 mx-auto" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span className="text-xs">Collapse</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
