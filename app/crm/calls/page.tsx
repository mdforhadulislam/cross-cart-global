import type { Metadata } from "next";
import { Search, Phone, PhoneIncoming, Clock } from "lucide-react";
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
  title: "Call Logs | CRM - Cross Cart Global",
  description: "View and manage your call logs with customers.",
};

const calls = [
  { id: "CALL-001", lead: "Ahmed Trading Co.", phone: "+880 1712-345678", direction: "outgoing", duration: "5:32", status: "completed", date: "2026-04-17", notes: "Discussed bulk shipping rates" },
  { id: "CALL-002", lead: "Global Fashion Ltd.", phone: "+880 1812-345678", direction: "incoming", duration: "3:45", status: "completed", date: "2026-04-17", notes: "Inquiry about delivery time" },
  { id: "CALL-003", lead: "Tech Solutions BD", phone: "+880 1912-345678", direction: "outgoing", duration: "0:00", status: "missed", date: "2026-04-17", notes: "No answer" },
  { id: "CALL-004", lead: "Export House", phone: "+880 1512-345678", direction: "outgoing", duration: "8:12", status: "completed", date: "2026-04-16", notes: "Demo scheduling confirmed" },
  { id: "CALL-005", lead: "Textile Mills Ltd.", phone: "+880 1612-345678", direction: "incoming", duration: "2:18", status: "completed", date: "2026-04-16", notes: "Follow-up on proposal" },
];

export default function CallLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Call Logs</h2>
          <p className="text-gray-500 text-sm">Track all your customer calls</p>
        </div>
        <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
          <Phone className="mr-2 h-4 w-4" />
          New Call
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search calls..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-[#7C3AED] border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Calls</p>
            <p className="text-2xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Completed</p>
            <p className="text-2xl font-bold">38</p>
          </CardContent>
        </Card>
        <Card className="bg-red-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Missed</p>
            <p className="text-2xl font-bold">5</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Duration</p>
            <p className="text-2xl font-bold">3h 24m</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Call ID</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold">Phone</TableHead>
              <TableHead className="font-semibold">Direction</TableHead>
              <TableHead className="font-semibold">Duration</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calls.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium text-[#7C3AED]">{call.id}</TableCell>
                <TableCell className="font-medium">{call.lead}</TableCell>
                <TableCell>{call.phone}</TableCell>
                <TableCell>
                  <Badge className={call.direction === 'incoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}>
                    {call.direction === 'incoming' ? <PhoneIncoming className="h-3 w-3 mr-1" /> : <Phone className="h-3 w-3 mr-1" />}
                    {call.direction}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {call.duration}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={call.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                    {call.status === 'completed' ? 'Completed' : 'Missed'}
                  </Badge>
                </TableCell>
                <TableCell>{call.date}</TableCell>
                <TableCell className="text-sm text-gray-600 max-w-[200px] truncate">{call.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
