"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

const dashboardRoutes = [
  "/dashboard",
  "/crm",
  "/admin",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isDashboardRoute = dashboardRoutes.some((route) => 
    pathname === route || pathname.startsWith(route + "/")
  );

  return (
    <>
      {!isDashboardRoute && (
        <>
          <NavBar />
          <div className="h-16.25"></div>
        </>
      )}
      {children}
      {!isDashboardRoute && <FooterBar />}
    </>
  );
}
