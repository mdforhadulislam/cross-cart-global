import type { Metadata } from "next";
import { Activity, User, Package, DollarSign, LogIn, LogOut, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Activity Logs | Admin - Cross Cart Global",
  description: "View admin activity logs.",
};

const activities = [
  { id: 1, user: "Super Admin", action: "Updated pricing for India zone", type: "pricing", time: "2 minutes ago", icon: DollarSign },
  { id: 2, user: "Super Admin", action: "Created new shipment CCG123457", type: "shipment", time: "15 minutes ago", icon: Package },
  { id: 3, user: "Super Admin", action: "Updated order status for ORD-2026-001", type: "order", time: "30 minutes ago", icon: Package },
  { id: 4, user: "Super Admin", action: "Logged in from 192.168.1.1", type: "auth", time: "1 hour ago", icon: LogIn },
  { id: 5, user: "Super Admin", action: "Added new zone: Africa", type: "zone", time: "2 hours ago", icon: Activity },
  { id: 6, user: "Super Admin", action: "Updated tracking for CCG123456", type: "tracking", time: "3 hours ago", icon: Package },
  { id: 7, user: "Super Admin", action: "Created user account for Alice Brown", type: "user", time: "4 hours ago", icon: User },
  { id: 8, user: "Super Admin", action: "Logged out", type: "auth", time: "5 hours ago", icon: LogOut },
  { id: 9, user: "Super Admin", action: "Updated settings configuration", type: "settings", time: "6 hours ago", icon: Edit },
  { id: 10, user: "Super Admin", action: "Resolved support ticket TKT-005", type: "ticket", time: "Yesterday", icon: Activity },
];

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Activity Logs</h2>
        <p className="text-gray-500 text-sm">Track all admin activities</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Total Actions</p>
              <p className="text-xl font-bold">1,245</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Shipment Actions</p>
              <p className="text-xl font-bold">456</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">User Actions</p>
              <p className="text-xl font-bold">234</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Pricing Updates</p>
              <p className="text-xl font-bold">56</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'auth' ? 'bg-blue-100' :
                    activity.type === 'shipment' || activity.type === 'order' || activity.type === 'tracking' ? 'bg-green-100' :
                    activity.type === 'user' ? 'bg-purple-100' :
                    activity.type === 'pricing' ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      activity.type === 'auth' ? 'text-blue-600' :
                      activity.type === 'shipment' || activity.type === 'order' || activity.type === 'tracking' ? 'text-green-600' :
                      activity.type === 'user' ? 'text-purple-600' :
                      activity.type === 'pricing' ? 'text-yellow-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          By <span className="font-medium text-[#DC2626]">{activity.user}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          activity.type === 'auth' ? 'bg-blue-100 text-blue-700' :
                          activity.type === 'shipment' || activity.type === 'order' || activity.type === 'tracking' ? 'bg-green-100 text-green-700' :
                          activity.type === 'user' ? 'bg-purple-100 text-purple-700' :
                          activity.type === 'pricing' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                        }>
                          {activity.type}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
