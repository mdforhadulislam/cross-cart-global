import type { Metadata } from "next";
import { User, Bell, Tag, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const metadata: Metadata = {
  title: "CRM Settings | Cross Cart Global",
  description: "Configure CRM settings and preferences.",
};

export default function CRMSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">CRM Settings</h2>
        <p className="text-gray-500 text-sm">Configure your CRM preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5 text-[#7C3AED]" />
            Profile Settings
          </CardTitle>
          <CardDescription>Update your CRM profile information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue="Rahim Khan" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="rahim@crosscartbd.com" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Department</Label>
              <Input defaultValue="CRM Team" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Input defaultValue="CRM Manager" />
            </div>
          </div>
          <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#7C3AED]" />
            Notifications
          </CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">New Lead Alerts</p>
              <p className="text-sm text-gray-500">Get notified when new leads are assigned</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Task Reminders</p>
              <p className="text-sm text-gray-500">Receive reminders for scheduled tasks</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Daily Summary</p>
              <p className="text-sm text-gray-500">Receive daily performance summary</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Tag className="h-5 w-5 text-[#7C3AED]" />
            Lead Statuses
          </CardTitle>
          <CardDescription>Customize lead status labels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Status Labels</Label>
            <div className="flex gap-2">
              <Input placeholder="Hot" className="flex-1" defaultValue="Hot" />
              <Input placeholder="Warm" className="flex-1" defaultValue="Warm" />
              <Input placeholder="Cold" className="flex-1" defaultValue="Cold" />
            </div>
          </div>
          <Button variant="outline">Add New Status</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-[#7C3AED]" />
            Sales Pipeline
          </CardTitle>
          <CardDescription>Manage your sales pipeline stages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="h-8 w-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span className="font-medium">New Lead</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="h-8 w-8 bg-[#7C3AED]/70 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span className="font-medium">Contacted</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="h-8 w-8 bg-[#7C3AED]/50 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span className="font-medium">Qualified</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="h-8 w-8 bg-[#7C3AED]/30 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span className="font-medium">Proposal</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span className="font-medium text-green-700">Won</span>
            </div>
          </div>
          <Button variant="outline">Add Stage</Button>
        </CardContent>
      </Card>
    </div>
  );
}
