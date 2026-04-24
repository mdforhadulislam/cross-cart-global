import type { Metadata } from "next";
import { Plus, Search, Filter, Download, MoreVertical, Eye, MapPin, Truck } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const metadata: Metadata = {
  title: "Shipments | Admin - Cross Cart Global",
  description: "Manage all shipments in the admin panel.",
};

const shipments = [
  { id: "CCG123456", origin: "Dhaka, Bangladesh", destination: "India - Mumbai", weight: "2.5 kg", service: "Express", status: "In Transit", eta: "2026-04-20" },
  { id: "CCG123455", origin: "Dhaka, Bangladesh", destination: "USA - New York", weight: "1.2 kg", service: "Standard", status: "Delivered", eta: "2026-04-14" },
  { id: "CCG123454", origin: "Dhaka, Bangladesh", destination: "UK - London", weight: "5.0 kg", service: "Express", status: "Processing", eta: "2026-04-22" },
  { id: "CCG123453", origin: "Dhaka, Bangladesh", destination: "China - Beijing", weight: "3.8 kg", service: "Economy", status: "Delivered", eta: "2026-04-12" },
  { id: "CCG123452", origin: "Dhaka, Bangladesh", destination: "Canada - Toronto", weight: "2.0 kg", service: "Standard", status: "In Transit", eta: "2026-04-21" },
];

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Shipment Management</h2>
          <p className="text-gray-500 text-sm">Track and manage all shipments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
            <Plus className="mr-2 h-4 w-4" />
            Create Shipment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <p className="text-sm text-yellow-600 font-medium">Processing</p>
            <p className="text-2xl font-bold text-yellow-700">34</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-blue-600 font-medium">In Transit</p>
            <p className="text-2xl font-bold text-blue-700">89</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <p className="text-sm text-green-600 font-medium">Delivered</p>
            <p className="text-2xl font-bold text-green-700">234</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <p className="text-sm text-purple-600 font-medium">Total Weight</p>
            <p className="text-2xl font-bold text-purple-700">1,234 kg</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search by tracking ID..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="in-transit">In Transit</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="express">Express</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
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
              <TableHead className="font-semibold">Tracking ID</TableHead>
              <TableHead className="font-semibold">Origin</TableHead>
              <TableHead className="font-semibold">Destination</TableHead>
              <TableHead className="font-semibold">Weight</TableHead>
              <TableHead className="font-semibold">Service</TableHead>
              <TableHead className="font-semibold">ETA</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell className="font-medium text-[#DC2626]">{shipment.id}</TableCell>
                <TableCell>{shipment.origin}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.weight}</TableCell>
                <TableCell>
                  <Badge className="bg-purple-100 text-purple-700">{shipment.service}</Badge>
                </TableCell>
                <TableCell>{shipment.eta}</TableCell>
                <TableCell>
                  <Badge className={shipment.status === 'Delivered' ? 'bg-green-100 text-green-700' : shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}>
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="h-4 w-4 mr-2" />View</DropdownMenuItem>
                      <DropdownMenuItem><MapPin className="h-4 w-4 mr-2" />Track</DropdownMenuItem>
                      <DropdownMenuItem><Truck className="h-4 w-4 mr-2" />Update</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
