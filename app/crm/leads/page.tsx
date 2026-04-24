import type { Metadata } from "next";
import { Plus, Search, Filter, Download, MoreVertical, Mail, Phone, Eye } from "lucide-react";
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
  title: "Leads | CRM - Cross Cart Global",
  description: "Manage all leads in the CRM system.",
};

const leads = [
  { id: "LEAD-001", name: "Ahmed Trading Co.", email: "contact@ahmedtrading.com", phone: "+880 1712-345678", status: "Hot", source: "Website", value: "$5,000", assignee: "Rahim" },
  { id: "LEAD-002", name: "Global Fashion Ltd.", email: "info@globalfashion.com", phone: "+880 1812-345678", status: "Warm", source: "Referral", value: "$8,500", assignee: "Karim" },
  { id: "LEAD-003", name: "Tech Solutions BD", email: "sales@techsolbd.com", phone: "+880 1912-345678", status: "Cold", source: "Facebook", value: "$2,000", assignee: "Rahim" },
  { id: "LEAD-004", name: "Export House", email: "export@house.com", phone: "+880 1512-345678", status: "Hot", source: "LinkedIn", value: "$12,000", assignee: "Karim" },
  { id: "LEAD-005", name: "Textile Mills Ltd.", email: "info@textilemills.com", phone: "+880 1612-345678", status: "Warm", source: "Website", value: "$6,500", assignee: "Rahim" },
  { id: "LEAD-006", name: "Digital Commerce", email: "hello@digitalco.com", phone: "+880 1412-345678", status: "Cold", source: "Google Ads", value: "$1,500", assignee: "Karim" },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
          <p className="text-gray-500 text-sm">Manage and track all your leads</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Lead
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search leads by name, email..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="warm">Warm</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="website">Website</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 font-medium">Hot Leads</p>
              <p className="text-2xl font-bold text-red-700">12</p>
            </div>
            <Badge className="bg-red-500 text-white">$17,000</Badge>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 font-medium">Warm Leads</p>
              <p className="text-2xl font-bold text-yellow-700">24</p>
            </div>
            <Badge className="bg-yellow-500 text-white">$28,000</Badge>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Cold Leads</p>
              <p className="text-2xl font-bold text-blue-700">18</p>
            </div>
            <Badge className="bg-blue-500 text-white">$8,500</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Lead ID</TableHead>
              <TableHead className="font-semibold">Company Name</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold">Value</TableHead>
              <TableHead className="font-semibold">Source</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Assigned To</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium text-[#7C3AED]">{lead.id}</TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm">{lead.email}</p>
                    <p className="text-xs text-gray-500">{lead.phone}</p>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-green-600">{lead.value}</TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>
                  <Badge className={lead.status === 'Hot' ? 'bg-red-100 text-red-700' : lead.status === 'Warm' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell>{lead.assignee}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="h-4 w-4 mr-2" />View</DropdownMenuItem>
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
