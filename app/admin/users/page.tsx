import type { Metadata } from "next";
import { Plus, Search, Filter, Download, MoreVertical, Eye, Edit, Shield } from "lucide-react";
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
  title: "Users | Admin - Cross Cart Global",
  description: "Manage all users in the admin panel.",
};

const users = [
  { id: "USR-001", name: "John Doe", email: "john@example.com", phone: "+880 1712-345678", role: "Customer", status: "Active", orders: 24, joined: "2025-06-15" },
  { id: "USR-002", name: "Jane Smith", email: "jane@example.com", phone: "+880 1812-345678", role: "Business", status: "Active", orders: 56, joined: "2025-04-20" },
  { id: "USR-003", name: "Bob Wilson", email: "bob@example.com", phone: "+880 1912-345678", role: "Customer", status: "Inactive", orders: 8, joined: "2026-01-10" },
  { id: "USR-004", name: "Alice Brown", email: "alice@example.com", phone: "+880 1512-345678", role: "Corporate", status: "Active", orders: 124, joined: "2024-11-05" },
  { id: "USR-005", name: "Charlie Davis", email: "charlie@example.com", phone: "+880 1612-345678", role: "Business", status: "Active", orders: 32, joined: "2025-08-22" },
  { id: "USR-006", name: "David Lee", email: "david@example.com", phone: "+880 1412-345678", role: "CRM", status: "Active", orders: 0, joined: "2024-03-01" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-500 text-sm">Manage all registered users</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-[#DC2626] hover:bg-[#DC2626]/90">
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Total Users</p>
            <p className="text-2xl font-bold">3,567</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Active Users</p>
            <p className="text-2xl font-bold">2,890</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Business Accounts</p>
            <p className="text-2xl font-bold">456</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 border-0 text-white">
          <CardContent className="p-4">
            <p className="text-white/70 text-sm">Corporate Accounts</p>
            <p className="text-2xl font-bold">89</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search users by name, email..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="crm">CRM</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
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

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">User ID</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              <TableHead className="font-semibold">Role</TableHead>
              <TableHead className="font-semibold">Orders</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Joined</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium text-[#DC2626]">{user.id}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={user.role === 'Admin' ? 'bg-red-100 text-red-700' : user.role === 'CRM' ? 'bg-purple-100 text-purple-700' : user.role === 'Corporate' ? 'bg-blue-100 text-blue-700' : user.role === 'Business' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {user.role === 'Admin' && <Shield className="h-3 w-3 mr-1" />}
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>{user.orders}</TableCell>
                <TableCell>
                  <Badge className={user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="h-4 w-4 mr-2" />View</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="h-4 w-4 mr-2" />Edit</DropdownMenuItem>
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
