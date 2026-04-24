import type { Metadata } from "next";
import { Download, CreditCard, CheckCircle2, Clock, Receipt, Smartphone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  title: "Payments | Cross Cart Global",
  description: "View your payment history and invoices with Cross Cart Global.",
};

const payments = [
  { id: "PAY-001", date: "2026-04-15", amount: "$45.00", method: "bKash", status: "Completed", invoice: "INV-2026-001" },
  { id: "PAY-002", date: "2026-04-12", amount: "$78.00", method: "Card", status: "Completed", invoice: "INV-2026-002" },
  { id: "PAY-003", date: "2026-04-10", amount: "$120.00", method: "Bank", status: "Completed", invoice: "INV-2026-003" },
  { id: "PAY-004", date: "2026-04-08", amount: "$65.00", method: "bKash", status: "Pending", invoice: "INV-2026-004" },
];

const getMethodIcon = (method: string) => {
  switch (method) {
    case "bKash":
      return <Smartphone className="h-4 w-4 text-pink-500" />;
    case "Card":
      return <CreditCard className="h-4 w-4 text-blue-500" />;
    case "Bank":
      return <Building className="h-4 w-4 text-green-500" />;
    default:
      return <Receipt className="h-4 w-4 text-gray-500" />;
  }
};

export default function PaymentsPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Payment History</h2>
          <p className="text-gray-500 text-sm">View all your transactions</p>
        </div>
        <Button variant="outline" size="sm" className="w-full sm:w-auto text-sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Stats Cards - Mobile Friendly Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-green-600">Completed</p>
              <p className="text-xl md:text-2xl font-bold text-green-700">$243</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-yellow-600">Pending</p>
              <p className="text-xl md:text-2xl font-bold text-yellow-700">$65</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200 sm:col-span-1">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-blue-600">Total Paid</p>
              <p className="text-xl md:text-2xl font-bold text-blue-700">$308</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.invoice}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell className="font-semibold">{payment.amount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getMethodIcon(payment.method)}
                    {payment.method}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={payment.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Download className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Invoice
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {payments.map((payment) => (
          <Card key={payment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getMethodIcon(payment.method)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{payment.invoice}</p>
                    <p className="text-xs text-gray-500">{payment.date}</p>
                  </div>
                </div>
                <Badge className={payment.status === 'Completed' ? 'bg-green-100 text-green-700 text-xs' : 'bg-yellow-100 text-yellow-700 text-xs'}>
                  {payment.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">{payment.method}</p>
                  <p className="text-xl font-bold text-[#F5B400]">{payment.amount}</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
