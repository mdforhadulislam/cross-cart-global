import type { Metadata } from "next";
import { Plus, Search, Filter, Check, X, MapPin, Clock } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Pickup Requests | Admin - Cross Cart Global",
  description: "Manage pickup requests in the admin panel.",
};

const pickups = [
  { id: "PUP-001", customer: "Ahmed Trading Co.", address: "123 Main St, Dhaka", phone: "+880 1712-345678", date: "2026-04-17", time: "10:00 AM", status: "Pending", items: 5 },
  { id: "PUP-002", customer: "Global Fashion Ltd.", address: "456 Business Ave, Dhaka", phone: "+880 1812-345678", date: "2026-04-17", time: "02:00 PM", status: "Scheduled", items: 12 },
  { id: "PUP-003", customer: "Tech Solutions BD", address: "789 Tech Park, Dhaka", phone: "+880 1912-345678", date: "2026-04-16", time: "11:00 AM", status: "Completed", items: 3 },
  { id: "PUP-004", customer: "Export House", address: "321 Industrial Rd, Dhaka", phone: "+880 1512-345678", date: "2026-04-18", time: "09:00 AM", status: "Pending", items: 8 },
  { id: "PUP-005", customer: "Textile Mills Ltd.", address: "654 Mill Road, Dhaka", phone: "+880 1612-345678", date: "2026-04-16", time: "03:00 PM", status: "Cancelled", items: 2 },
];

export default function PickupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pickup Requests</h2>
          <p className="text-gray-500 text-sm">Manage pickup requests and scheduling</p>
        </div>
        <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
          <Plus className="mr-2 h-4 w-4" />
          New Pickup
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <p className="text-sm text-yellow-600 font-medium">Pending</p>
            <p className="text-2xl font-bold text-yellow-700">8</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-blue-600 font-medium">Scheduled</p>
            <p className="text-2xl font-bold text-blue-700">15</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <p className="text-sm text-green-600 font-medium">Completed</p>
            <p className="text-2xl font-bold text-green-700">45</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <p className="text-sm text-red-600 font-medium">Cancelled</p>
            <p className="text-2xl font-bold text-red-700">3</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search pickups..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More
        </Button>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Pickup ID</TableHead>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Address</TableHead>
              <TableHead className="font-semibold">Items</TableHead>
              <TableHead className="font-semibold">Date & Time</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pickups.map((pickup) => (
              <TableRow key={pickup.id}>
                <TableCell className="font-medium text-[#DC2626]">{pickup.id}</TableCell>
                <TableCell className="font-medium">{pickup.customer}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{pickup.address}</span>
                  </div>
                </TableCell>
                <TableCell>{pickup.items}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-sm">{pickup.date}</p>
                      <p className="text-xs text-gray-500">{pickup.time}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={pickup.status === 'Completed' ? 'bg-green-100 text-green-700' : pickup.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : pickup.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}>
                    {pickup.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {pickup.status === 'Pending' && (
                      <>
                        <Button size="sm" variant="ghost" className="text-green-600">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="ghost">View</Button>
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
