import type { Metadata } from "next";
import { Search, Filter, Check, MessageSquare, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Support Tickets | Admin - Cross Cart Global",
  description: "Manage support tickets in the admin panel.",
};

const tickets = [
  { id: "TKT-001", customer: "John Doe", email: "john@example.com", subject: "Tracking Issue - CCG123456", status: "Open", priority: "High", created: "2026-04-17" },
  { id: "TKT-002", customer: "Jane Smith", email: "jane@example.com", subject: "Refund Request", status: "Open", priority: "Medium", created: "2026-04-17" },
  { id: "TKT-003", customer: "Bob Wilson", email: "bob@example.com", subject: "Delivery Delay Complaint", status: "In Progress", priority: "Low", created: "2026-04-16" },
  { id: "TKT-004", customer: "Alice Brown", email: "alice@example.com", subject: "Wrong Item Received", status: "In Progress", priority: "High", created: "2026-04-16" },
  { id: "TKT-005", customer: "Charlie Davis", email: "charlie@example.com", subject: "Billing Question", status: "Resolved", priority: "Low", created: "2026-04-15" },
];

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
        <p className="text-gray-500 text-sm">Manage customer support requests</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-red-600 font-medium">Open</p>
              <p className="text-xl font-bold text-red-700">8</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-yellow-600 font-medium">In Progress</p>
              <p className="text-xl font-bold text-yellow-700">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-green-600 font-medium">Resolved</p>
              <p className="text-xl font-bold text-green-700">45</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-600 font-medium">Avg Response</p>
              <p className="text-xl font-bold text-blue-700">2.5h</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search tickets..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Ticket ID</TableHead>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Subject</TableHead>
              <TableHead className="font-semibold">Priority</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Created</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium text-[#DC2626]">{ticket.id}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="font-medium">{ticket.customer}</p>
                    <p className="text-xs text-gray-500">{ticket.email}</p>
                  </div>
                </TableCell>
                <TableCell className="max-w-[250px] truncate">{ticket.subject}</TableCell>
                <TableCell>
                  <Badge className={ticket.priority === 'High' ? 'bg-red-100 text-red-700' : ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={ticket.status === 'Open' ? 'bg-red-100 text-red-700' : ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.created}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply
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
