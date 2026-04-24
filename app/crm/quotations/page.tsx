import type { Metadata } from "next";
import { Plus, Search, Download, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Quotations | CRM - Cross Cart Global",
  description: "Create and manage quotations for customers.",
};

const quotations = [
  { id: "QUO-001", customer: "Ahmed Trading Co.", destination: "India - Mumbai", weight: "50 kg", service: "Express", amount: "$450.00", status: "Sent", date: "2026-04-15" },
  { id: "QUO-002", customer: "Global Fashion Ltd.", destination: "USA - New York", weight: "100 kg", service: "Standard", amount: "$850.00", status: "Accepted", date: "2026-04-14" },
  { id: "QUO-003", customer: "Tech Solutions BD", destination: "UK - London", weight: "25 kg", service: "Express", amount: "$320.00", status: "Pending", date: "2026-04-13" },
  { id: "QUO-004", customer: "Export House", destination: "China - Beijing", weight: "200 kg", service: "Sea Freight", amount: "$1,200.00", status: "Sent", date: "2026-04-12" },
  { id: "QUO-005", customer: "Textile Mills Ltd.", destination: "UAE - Dubai", weight: "75 kg", service: "Standard", amount: "$580.00", status: "Rejected", date: "2026-04-11" },
];

export default function QuotationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quotations</h2>
          <p className="text-gray-500 text-sm">Create and manage customer quotations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
            <Plus className="mr-2 h-4 w-4" />
            New Quotation
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search quotations..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-[#7C3AED] border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Quotations</p>
            <p className="text-2xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Accepted</p>
            <p className="text-2xl font-bold">28</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Pending</p>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card className="bg-red-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Rejected</p>
            <p className="text-2xl font-bold">5</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Quote ID</TableHead>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Destination</TableHead>
              <TableHead className="font-semibold">Service</TableHead>
              <TableHead className="font-semibold">Amount</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotations.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell className="font-medium text-[#7C3AED]">{quote.id}</TableCell>
                <TableCell className="font-medium">{quote.customer}</TableCell>
                <TableCell>{quote.destination}</TableCell>
                <TableCell>
                  <Badge className="bg-purple-100 text-purple-700">{quote.service}</Badge>
                </TableCell>
                <TableCell className="font-semibold text-green-600">{quote.amount}</TableCell>
                <TableCell>
                  <Badge className={quote.status === 'Accepted' ? 'bg-green-100 text-green-700' : quote.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}>
                    {quote.status}
                  </Badge>
                </TableCell>
                <TableCell>{quote.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-[#7C3AED]">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
