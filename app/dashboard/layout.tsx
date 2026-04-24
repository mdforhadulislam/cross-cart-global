import UserSidebar from "@/components/user-dashboard/UserSidebar";
import UserDashboardHeader from "@/components/user-dashboard/UserDashboardHeader";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <UserSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <UserDashboardHeader />
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
