import CRMSidebar from "@/components/crm-dashboard/CRMSidebar";
import CRMDashboardHeader from "@/components/crm-dashboard/CRMDashboardHeader";

export default function CRMDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <CRMSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <CRMDashboardHeader />
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
