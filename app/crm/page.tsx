import type { Metadata } from "next";
import { Users, UserPlus, CheckCircle2, Clock, TrendingUp, DollarSign, Phone, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM Dashboard | Cross Cart Global",
  description: "CRM Dashboard for managing leads, customers, and sales pipeline.",
};

const stats = [
  { title: "Total Leads", value: "156", icon: Users, trend: "+12", color: "text-purple-600", bg: "bg-purple-100" },
  { title: "New Leads", value: "28", icon: UserPlus, trend: "+5", color: "text-green-600", bg: "bg-green-100" },
  { title: "Converted", value: "89", icon: CheckCircle2, trend: "+8", color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Pending", value: "39", icon: Clock, trend: "-3", color: "text-orange-600", bg: "bg-orange-100" },
];

const recentLeads = [
  { id: "LEAD-001", name: "Ahmed Trading Co.", email: "contact@ahmedtrading.com", phone: "+880 1712-345678", status: "Hot", source: "Website", date: "2026-04-15" },
  { id: "LEAD-002", name: "Global Fashion Ltd.", email: "info@globalfashion.com", phone: "+880 1812-345678", status: "Warm", source: "Referral", date: "2026-04-14" },
  { id: "LEAD-003", name: "Tech Solutions BD", email: "sales@techsolbd.com", phone: "+880 1912-345678", status: "Cold", source: "Facebook", date: "2026-04-13" },
  { id: "LEAD-004", name: "Export House", email: "export@house.com", phone: "+880 1512-345678", status: "Hot", source: "LinkedIn", date: "2026-04-12" },
];

const todaysTasks = [
  { id: 1, title: "Follow up with Ahmed Trading", time: "10:00 AM", type: "call" },
  { id: 2, title: "Send quotation to Global Fashion", time: "11:30 AM", type: "email" },
  { id: 3, title: "Demo presentation for Export House", time: "02:00 PM", type: "meeting" },
  { id: 4, title: "Call Tech Solutions BD", time: "04:00 PM", type: "call" },
];

export default function CRMDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">CRM Overview</h2>
          <p className="text-gray-500 text-sm">Welcome back! Here&apos;s your pipeline summary</p>
        </div>
        <Link href="/crm/leads">
          <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Lead
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1">+{stat.trend} this week</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Leads</CardTitle>
            <Link href="/crm/leads">
              <Button variant="ghost" size="sm" className="text-[#7C3AED]">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lead ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium text-[#7C3AED]">{lead.id}</TableCell>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>
                      <Badge className={lead.status === 'Hot' ? 'bg-red-100 text-red-700' : lead.status === 'Warm' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#7C3AED]" />
              Today&apos;s Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaysTasks.map((task) => (
              <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${task.type === 'call' ? 'bg-green-100' : task.type === 'email' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                  {task.type === 'call' && <Phone className="h-4 w-4 text-green-600" />}
                  {task.type === 'email' && <TrendingUp className="h-4 w-4 text-blue-600" />}
                  {task.type === 'meeting' && <Users className="h-4 w-4 text-purple-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.time}</p>
                </div>
              </div>
            ))}
            <Link href="/crm/tasks">
              <Button variant="outline" className="w-full">View All Tasks</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 border-0 text-white">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-7 w-7" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Pipeline Value</p>
              <p className="text-2xl font-bold">$45,600</p>
              <p className="text-xs text-white/70">12 active deals</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0 text-white">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="h-7 w-7" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Conversion Rate</p>
              <p className="text-2xl font-bold">57%</p>
              <p className="text-xs text-white/70">+5% this month</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 border-0 text-white">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Avg Response Time</p>
              <p className="text-2xl font-bold">2.5 hrs</p>
              <p className="text-xs text-white/70">-30min faster</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
