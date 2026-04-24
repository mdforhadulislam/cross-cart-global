import type { Metadata } from "next";
import { CheckCircle2, Package, Truck, Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Notifications | Cross Cart Global",
  description: "View your notifications and updates from Cross Cart Global.",
};

const notifications = [
  { id: 1, type: "delivery", title: "Package Delivered", message: "Your shipment CCG123455 has been delivered successfully to Mumbai.", time: "2 hours ago", read: false },
  { id: 2, type: "transit", title: "In Transit", message: "Your shipment CCG123456 is on the way to destination.", time: "5 hours ago", read: false },
  { id: 3, type: "customs", title: "Customs Cleared", message: "Your shipment CCG123456 has cleared customs.", time: "1 day ago", read: true },
  { id: 4, type: "pickup", title: "Pickup Scheduled", message: "Pickup scheduled for April 20, 2026 at your address.", time: "2 days ago", read: true },
  { id: 5, type: "payment", title: "Payment Received", message: "Payment of $45.00 has been received successfully.", time: "3 days ago", read: true },
  { id: 6, type: "delivery", title: "Package Delivered", message: "Your shipment CCG123453 has been delivered.", time: "5 days ago", read: true },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "delivery":
      return { icon: CheckCircle2, bg: "bg-green-100", color: "text-green-600" };
    case "transit":
      return { icon: Truck, bg: "bg-blue-100", color: "text-blue-600" };
    case "customs":
      return { icon: Package, bg: "bg-orange-100", color: "text-orange-600" };
    case "pickup":
      return { icon: Package, bg: "bg-purple-100", color: "text-purple-600" };
    case "payment":
      return { icon: CheckCircle2, bg: "bg-green-100", color: "text-green-600" };
    default:
      return { icon: Bell, bg: "bg-gray-100", color: "text-gray-600" };
  }
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-500 text-sm">{unreadCount} unread notifications</p>
        </div>
        <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm">
          <Check className="mr-2 h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      {/* Filter Tabs - Mobile Friendly */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
        <Button variant="secondary" size="sm" className="whitespace-nowrap text-xs">
          All ({notifications.length})
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap text-xs">
          Unread ({unreadCount})
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap text-xs">
          Shipments
        </Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap text-xs">
          Payments
        </Button>
      </div>

      {/* Notifications List - Mobile Friendly */}
      <div className="space-y-3">
        {notifications.map((notification) => {
          const { icon: Icon, bg, color } = getNotificationIcon(notification.type);
          return (
            <Card 
              key={notification.id} 
              className={`${notification.read ? 'bg-white' : 'bg-blue-50 border-blue-200'} hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center flex-shrink-0 ${bg}`}>
                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{notification.title}</h3>
                        {!notification.read && (
                          <Badge className="bg-[#0B2A4A] text-white text-xs px-2">New</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{notification.message}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <Bell className="h-3 w-3" />
                        {notification.time}
                      </p>
                      {!notification.read && (
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Load More - Mobile Friendly */}
      <div className="text-center">
        <Button variant="outline" size="sm" className="text-sm">
          Load More Notifications
        </Button>
      </div>
    </div>
  );
}
