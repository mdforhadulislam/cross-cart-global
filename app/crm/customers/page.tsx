import type { Metadata } from "next";
import { Plus, Search, Filter, Download, MoreVertical, Building2, Mail, Phone, Eye } from "lucide-react";
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
  title: "Customers | CRM - Cross Cart Global",
  description: "Manage all customers in the CRM system.",
};

const customers = [
  { id: "CUST-001", name: "Ahmed Trading Co.", email: "contact@ahmedtrading.com", phone: "+880 1712-345678", type: "Corporate", totalShipments: 45, totalValue: "$12,500", status: "Active" },
  { id: "CUST-002", name: "Rahman Enterprise", email: "info@rahmanent.com", phone: "+880 1812-345678", type: "Corporate", totalShipments: 32, totalValue: "$8,200", status: "Active" },
  { id: "CUST-003", name: "Fashion House BD", email: "sales@fashionhouse.com", phone: "+880 1912-345678", type: "Business", totalShipments: 28, totalValue: "$6,800", status: "Active" },
  { id: "CUST-004", name: "Tech Importers", email: "import@techbd.com", phone: "+880 1512-345678", type: "Corporate", totalShipments: 18, totalValue: "$15,000", status: "Active" },
  { id: "CUST-005", name: "Sultan Textiles", email: "info@sultantextile.com", phone: "+880 1612-345678", type: "Business", totalShipments: 15, totalValue: "$4,500", status: "Inactive" },
  { id: "CUST-006", name: "Modern Electronics", email: "sales@modernelec.com", phone: "+880 1412-345678", type: "Corporate", totalShipments: 52, totalValue: "$22,000", status: "Active" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
          <p className="text-gray-500 text-sm">Manage and view all your customers</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search customers..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-[#7C3AED] border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Customers</p>
            <p className="text-2xl font-bold">156</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Active Customers</p>
            <p className="text-2xl font-bold">128</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">$68,500</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Customer ID</TableHead>
              <TableHead className="font-semibold">Company</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">Shipments</TableHead>
              <TableHead className="font-semibold">Total Value</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium text-[#7C3AED]">{customer.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-[#7C3AED]/10 rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-[#7C3AED]" />
                    </div>
                    <span className="font-medium">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm">{customer.email}</p>
                    <p className="text-xs text-gray-500">{customer.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={customer.type === 'Corporate' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
                    {customer.type}
                  </Badge>
                </TableCell>
                <TableCell>{customer.totalShipments}</TableCell>
                <TableCell className="font-semibold text-green-600">{customer.totalValue}</TableCell>
                <TableCell>
                  <Badge className={customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {customer.status}
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
                      <DropdownMenuItem><Eye className="h-4 w-4 mr-2" />View Profile</DropdownMenuItem>
                      <DropdownMenuItem><Mail className="h-4 w-4 mr-2" />Send Email</DropdownMenuItem>
                      <DropdownMenuItem><Phone className="h-4 w-4 mr-2" />Call</DropdownMenuItem>
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
