import type { Metadata } from "next";
import { Search, Download, Check, X, CreditCard, DollarSign } from "lucide-react";
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
  title: "Payments | Admin - Cross Cart Global",
  description: "Manage payments in the admin panel.",
};

const payments = [
  { id: "PAY-001", customer: "Ahmed Trading Co.", invoice: "INV-2026-001", amount: "$450.00", method: "bKash", status: "Completed", date: "2026-04-17" },
  { id: "PAY-002", customer: "Global Fashion Ltd.", invoice: "INV-2026-002", amount: "$850.00", method: "Card", status: "Completed", date: "2026-04-17" },
  { id: "PAY-003", customer: "Tech Solutions BD", invoice: "INV-2026-003", amount: "$320.00", method: "Bank", status: "Pending", date: "2026-04-16" },
  { id: "PAY-004", customer: "Export House", invoice: "INV-2026-004", amount: "$1,200.00", method: "bKash", status: "Completed", date: "2026-04-16" },
  { id: "PAY-005", customer: "Textile Mills Ltd.", invoice: "INV-2026-005", amount: "$580.00", method: "Card", status: "Refunded", date: "2026-04-15" },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payment Management</h2>
          <p className="text-gray-500 text-sm">Track and manage all transactions</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="bg-[#DC2626] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">$89,450</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Completed</p>
              <p className="text-2xl font-bold">$72,500</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Pending</p>
              <p className="text-2xl font-bold">$8,950</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <X className="h-6 w-6" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Refunded</p>
              <p className="text-2xl font-bold">$2,000</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search payments..." className="pl-10" />
        </div>
      </div>

      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Payment ID</TableHead>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Invoice</TableHead>
              <TableHead className="font-semibold">Amount</TableHead>
              <TableHead className="font-semibold">Method</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium text-[#DC2626]">{payment.id}</TableCell>
                <TableCell className="font-medium">{payment.customer}</TableCell>
                <TableCell>{payment.invoice}</TableCell>
                <TableCell className="font-semibold text-green-600">{payment.amount}</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-700">{payment.method}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={payment.status === 'Completed' ? 'bg-green-100 text-green-700' : payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}>
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
