import AdminSidebar from "@/components/admin-dashboard/AdminSidebar";
import AdminDashboardHeader from "@/components/admin-dashboard/AdminDashboardHeader";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminDashboardHeader />
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
