import type { Metadata } from "next";
import { Bell, Send, Users, Package, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Notifications | Admin - Cross Cart Global",
  description: "Send notifications to users in the admin panel.",
};

const notifications = [
  { id: 1, title: "New Service Available", message: "We now offer express delivery to India!", sent: "2026-04-17", recipients: "All Users", status: "Sent" },
  { id: 2, title: "Holiday Schedule", message: "Office will remain closed on April 21", sent: "2026-04-15", recipients: "All Users", status: "Sent" },
  { id: 3, title: "Rate Update", message: "New shipping rates effective from May 1", sent: "2026-04-10", recipients: "Business Users", status: "Sent" },
  { id: 4, title: "System Maintenance", message: "Scheduled maintenance on April 20", sent: "2026-04-08", recipients: "All Users", status: "Sent" },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        <p className="text-gray-500 text-sm">Send notifications to users</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Bell className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Total Sent</p>
              <p className="text-2xl font-bold">156</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Total Recipients</p>
              <p className="text-2xl font-bold">12,500</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Open Rate</p>
              <p className="text-2xl font-bold">78%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Send New Notification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Enter notification title" />
          </div>
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea placeholder="Enter notification message" rows={4} />
          </div>
          <div className="space-y-2">
            <Label>Send To</Label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="all">All Users</option>
              <option value="business">Business Users</option>
              <option value="corporate">Corporate Users</option>
              <option value="individual">Individual Users</option>
            </select>
          </div>
          <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
            <Send className="mr-2 h-4 w-4" />
            Send Notification
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="h-10 w-10 bg-[#DC2626]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="h-5 w-5 text-[#DC2626]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      <Check className="h-3 w-3 mr-1" />
                      {notification.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span>Sent: {notification.sent}</span>
                    <span>Recipients: {notification.recipients}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
