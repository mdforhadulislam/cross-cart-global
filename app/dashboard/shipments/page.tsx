import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, Filter, Download, MapPin, Eye, ChevronRight } from "lucide-react";
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
  title: "My Shipments | Cross Cart Global",
  description: "View and manage all your shipments with Cross Cart Global. Track status, view details, and create new shipments.",
};

const shipments = [
  { id: "CCG123456", destination: "India - Mumbai", status: "In Transit", date: "2026-04-15", weight: "2.5 kg", price: "$45.00", progress: 65 },
  { id: "CCG123455", destination: "USA - New York", status: "Delivered", date: "2026-04-14", weight: "1.2 kg", price: "$78.00", progress: 100 },
  { id: "CCG123454", destination: "UK - London", status: "Processing", date: "2026-04-13", weight: "5.0 kg", price: "$120.00", progress: 15 },
  { id: "CCG123453", destination: "China - Beijing", status: "Delivered", date: "2026-04-12", weight: "3.8 kg", price: "$65.00", progress: 100 },
  { id: "CCG123452", destination: "Canada - Toronto", status: "In Transit", date: "2026-04-11", weight: "2.0 kg", price: "$85.00", progress: 80 },
  { id: "CCG123451", destination: "Australia - Sydney", status: "Delivered", date: "2026-04-10", weight: "1.5 kg", price: "$92.00", progress: 100 },
  { id: "CCG123450", destination: "UAE - Dubai", status: "Cancelled", date: "2026-04-09", weight: "4.0 kg", price: "$55.00", progress: 0 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "In Transit":
      return "bg-blue-100 text-blue-700";
    case "Processing":
      return "bg-yellow-100 text-yellow-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function ShipmentsPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">My Shipments</h2>
          <p className="text-gray-500 text-sm">Manage all your shipments</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs md:text-sm">
            <Download className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Export</span>
            <span className="sm:hidden">Exp</span>
          </Button>
          <Link href="/dashboard/shipments/new" className="flex-1 sm:flex-none">
            <Button size="sm" className="w-full bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] text-xs md:text-sm">
              <Plus className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              New Shipment
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters - Mobile Friendly */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search tracking ID..." className="pl-10 h-10 text-sm" />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[120px] md:w-[150px] h-10 text-sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="in-transit">In Transit</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-10 px-3">
            <Filter className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">More Filters</span>
          </Button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Tracking ID</TableHead>
              <TableHead className="font-semibold">Destination</TableHead>
              <TableHead className="font-semibold">Weight</TableHead>
              <TableHead className="font-semibold">Price</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell className="font-medium text-[#0B2A4A]">{shipment.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {shipment.destination}
                  </div>
                </TableCell>
                <TableCell>{shipment.weight}</TableCell>
                <TableCell className="font-medium">{shipment.price}</TableCell>
                <TableCell>{shipment.date}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(shipment.status)}>
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Link href={`/dashboard/track?tracking=${shipment.id}`}>
                      <Button variant="ghost" size="sm" className="text-xs">Track</Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-xs">Details</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {shipments.map((shipment) => (
          <Card key={shipment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="font-semibold text-[#0B2A4A]">{shipment.id}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <MapPin className="h-3 w-3" />
                    {shipment.destination}
                  </div>
                </div>
                <Badge className={`${getStatusColor(shipment.status)} text-xs`}>
                  {shipment.status}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-gray-500">Weight</p>
                  <p className="font-semibold">{shipment.weight}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-gray-500">Price</p>
                  <p className="font-semibold text-[#F5B400]">{shipment.price}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-gray-500">Date</p>
                  <p className="font-semibold">{shipment.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/dashboard/track?tracking=${shipment.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    Track
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination - Mobile Friendly */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">Showing 1-{shipments.length} of {shipments.length} shipments</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled className="text-xs">Previous</Button>
          <Button variant="outline" size="sm" disabled className="text-xs">Next</Button>
        </div>
      </div>
    </div>
  );
}
