import type { Metadata } from "next";
import { User, Lock, Bell, Shield, Globe, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Settings | Cross Cart Global",
  description: "Manage your Cross Cart Global account settings and preferences.",
};

export default function SettingsPage() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500 text-sm">Manage your account preferences</p>
      </div>

      {/* Profile Section - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <User className="h-5 w-5 text-[#F5B400]" />
            Profile Information
          </CardTitle>
          <CardDescription className="text-sm">Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-4">
          {/* Avatar Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Avatar className="h-16 w-16 md:h-20 md:w-20">
                <AvatarImage src="/api/placeholder/100/100" />
                <AvatarFallback className="bg-[#F5B400] text-[#0B2A4A] text-xl font-bold">JD</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="secondary" className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
              <Button variant="outline" size="sm" className="mt-2 text-xs">
                Change Photo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm">First Name</Label>
              <Input id="firstName" defaultValue="John" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" className="h-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">Email Address</Label>
            <Input id="email" type="email" defaultValue="john@example.com" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+880 1712-345678" className="h-10" />
          </div>
          <Button className="w-full sm:w-auto bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f]">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Password Section - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <Lock className="h-5 w-5 text-[#F5B400]" />
            Change Password
          </CardTitle>
          <CardDescription className="text-sm">Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-sm">Current Password</Label>
            <Input id="currentPassword" type="password" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-sm">New Password</Label>
            <Input id="newPassword" type="password" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" className="h-10" />
          </div>
          <Button className="w-full sm:w-auto bg-[#0B2A4A] hover:bg-[#0B2A4A]/90">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Notification Preferences - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#F5B400]" />
            Notification Preferences
          </CardTitle>
          <CardDescription className="text-sm">Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex-1 pr-4">
              <p className="font-medium text-gray-900 text-sm md:text-base">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex-1 pr-4">
              <p className="font-medium text-gray-900 text-sm md:text-base">SMS Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via SMS</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex-1 pr-4">
              <p className="font-medium text-gray-900 text-sm md:text-base">Marketing Emails</p>
              <p className="text-sm text-gray-500">Receive promotional offers</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Language & Region - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#F5B400]" />
            Language & Region
          </CardTitle>
          <CardDescription className="text-sm">Customize your language and regional preferences</CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-4">
          <div className="space-y-2">
            <Label className="text-sm">Language</Label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm">
              <option value="en">English</option>
              <option value="bn">বাংলা (Bengali)</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Timezone</Label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg h-10 text-sm">
              <option value="Asia/Dhaka">Bangladesh (GMT+6)</option>
              <option value="Asia/Kolkata">India (GMT+5:30)</option>
              <option value="America/New_York">USA (GMT-5)</option>
              <option value="Europe/London">UK (GMT+0)</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone - Mobile Friendly */}
      <Card className="border-red-200">
        <CardHeader className="px-4 md:px-6 pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2 text-red-600">
            <Shield className="h-5 w-5" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-red-50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm md:text-base">Delete Account</p>
              <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" size="sm" className="w-full sm:w-auto">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
