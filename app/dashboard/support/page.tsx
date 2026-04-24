import type { Metadata } from "next";
import { HeadphonesIcon, MessageSquare, Phone, Mail, FileText, ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Support | Cross Cart Global",
  description: "Get help and support from Cross Cart Global. Contact us for any queries or issues.",
};

export default function SupportPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Support Center</h2>
        <p className="text-gray-500 text-sm">We&apos;re here to help you 24/7</p>
      </div>

      {/* Contact Cards - Mobile Friendly Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="h-12 w-12 md:h-14 md:w-14 bg-[#F5B400]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Phone className="h-6 w-6 md:h-7 md:w-7 text-[#F5B400]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Call Us</h3>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Available 24/7</p>
            <p className="font-bold text-[#0B2A4A] text-sm md:text-base">+880 1410-144466</p>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 md:p-6">
            <div className="h-12 w-12 md:h-14 md:w-14 bg-[#F5B400]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Mail className="h-6 w-6 md:h-7 md:w-7 text-[#F5B400]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Email Us</h3>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Response within 24h</p>
            <p className="font-bold text-[#0B2A4A] text-xs md:text-base break-all">support@crosscartbd.com</p>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-md transition-shadow cursor-pointer sm:col-span-1">
          <CardContent className="p-4 md:p-6">
            <div className="h-12 w-12 md:h-14 md:w-14 bg-[#F5B400]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <MessageSquare className="h-6 w-6 md:h-7 md:w-7 text-[#F5B400]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Live Chat</h3>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Chat with an agent</p>
            <Button size="sm" className="w-full bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] text-xs md:text-sm">
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Ticket Form - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#F5B400]" />
            Submit a Support Ticket
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Your Name</label>
              <Input placeholder="Enter your name" className="h-10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input type="email" placeholder="Enter your email" className="h-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tracking Number</label>
              <Input placeholder="e.g., CCG123456" className="h-10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <Input placeholder="Enter subject" className="h-10" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <Textarea placeholder="Describe your issue or question..." rows={4} className="resize-none" />
          </div>
          <Button className="w-full sm:w-auto bg-[#0B2A4A] hover:bg-[#0B2A4A]/90">
            <HeadphonesIcon className="mr-2 h-4 w-4" />
            Submit Ticket
          </Button>
        </CardContent>
      </Card>

      {/* FAQs - Mobile Friendly */}
      <Card>
        <CardHeader className="px-4 md:px-6 pb-3 md:pb-4">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#F5B400]" />
            FAQs
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-3">
          <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium text-gray-900 text-sm md:text-base">How long does international shipping take?</h4>
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Express: 2-4 days, Standard: 5-7 days, Economy: 10-15 days depending on destination.</p>
          </div>
          <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium text-gray-900 text-sm md:text-base">What items cannot be shipped?</h4>
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Hazardous materials, flammable items, perishables, and items prohibited by destination country laws.</p>
          </div>
          <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium text-gray-900 text-sm md:text-base">How can I track my shipment?</h4>
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Use your tracking number on our website or app to get real-time updates on your shipment status.</p>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-2 text-sm">
            View All FAQs
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
