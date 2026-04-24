import type { Metadata } from "next";
import { Plus, Search, CheckCircle2, Clock, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Tasks | CRM - Cross Cart Global",
  description: "Manage your daily tasks and follow-ups.",
};

const tasks = [
  { id: 1, title: "Follow up with Ahmed Trading", description: "Discuss bulk shipping requirements", contact: "Ahmed Trading Co.", time: "10:00 AM", type: "call", priority: "high", status: "pending" },
  { id: 2, title: "Send quotation to Global Fashion", description: "Prepare quote for international shipping", contact: "Global Fashion Ltd.", time: "11:30 AM", type: "email", priority: "high", status: "pending" },
  { id: 3, title: "Demo presentation for Export House", description: "Product demo and pricing discussion", contact: "Export House", time: "02:00 PM", type: "meeting", priority: "medium", status: "pending" },
  { id: 4, title: "Call Tech Solutions BD", description: "Follow up on proposal", contact: "Tech Solutions BD", time: "04:00 PM", type: "call", priority: "low", status: "pending" },
  { id: 5, title: "Review proposal from Textile Mills", description: "Analyze requirements and prepare response", contact: "Textile Mills Ltd.", time: "05:30 PM", type: "task", priority: "medium", status: "pending" },
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tasks & Follow-ups</h2>
          <p className="text-gray-500 text-sm">Manage your daily tasks and schedule</p>
        </div>
        <Button className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search tasks..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="call">Call</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="meeting">Meeting</SelectItem>
            <SelectItem value="task">Task</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-[#7C3AED] border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Pending Tasks</p>
              <p className="text-2xl font-bold">{tasks.filter(t => t.status === 'pending').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Completed Today</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-500 border-0 text-white">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-white/70 text-sm">Overdue</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-start gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                task.type === 'call' ? 'bg-green-100' : 
                task.type === 'email' ? 'bg-blue-100' : 
                task.type === 'meeting' ? 'bg-purple-100' : 'bg-gray-100'
              }`}>
                {task.type === 'call' && <Phone className="h-5 w-5 text-green-600" />}
                {task.type === 'email' && <Mail className="h-5 w-5 text-blue-600" />}
                {task.type === 'meeting' && <Calendar className="h-5 w-5 text-purple-600" />}
                {task.type === 'task' && <CheckCircle2 className="h-5 w-5 text-gray-600" />}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                    <p className="text-xs text-[#7C3AED] mt-1">{task.contact}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge className={
                      task.priority === 'high' ? 'bg-red-100 text-red-700' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }>
                      {task.priority}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {task.time}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="h-8">Mark Complete</Button>
                  <Button size="sm" variant="ghost" className="h-8 text-[#7C3AED]">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
