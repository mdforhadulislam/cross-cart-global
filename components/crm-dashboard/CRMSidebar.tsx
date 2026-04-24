"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CheckSquare,
  Phone,
  FileText,
  BarChart3,
  Settings,
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
  { title: "Dashboard", href: "/crm", icon: LayoutDashboard },
  { title: "Leads", href: "/crm/leads", icon: UserPlus },
  { title: "Customers", href: "/crm/customers", icon: Users },
  { title: "Tasks", href: "/crm/tasks", icon: CheckSquare },
  { title: "Call Logs", href: "/crm/calls", icon: Phone },
  { title: "Quotations", href: "/crm/quotations", icon: FileText },
  { title: "Reports", href: "/crm/reports", icon: BarChart3 },
  { title: "Settings", href: "/crm/settings", icon: Settings },
];

export default function CRMSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "sticky top-0 h-screen bg-gradient-to-b from-[#7C3AED] to-[#5B21B6] border-r border-white/10 flex flex-col transition-all duration-300 z-50",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          {!collapsed && (
            <Link href="/crm" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#7C3AED] font-bold text-sm">CRM</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-sm leading-tight">CRM</h2>
                <p className="text-white/50 text-[10px]">Team Portal</p>
              </div>
            </Link>
          )}
          {collapsed && (
            <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center mx-auto">
              <span className="text-[#7C3AED] font-bold text-sm">CRM</span>
            </div>
          )}
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/crm" && pathname.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                      isActive
                        ? "bg-white text-[#7C3AED]"
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
            {!collapsed && <span className="text-sm">My Profile</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-red-300 hover:text-red-200 hover:bg-red-500/10",
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
