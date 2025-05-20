/*import { ReactNode } from "react";
import Footer from "@/components/Footer";
import HeaderDashboard from "../../components/HeaderDashboard";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderDashboard />
      <main>{children}</main>
      <Footer />
    </>
  );
}*/ 

import { ReactNode } from "react";
import HeaderDashboard from "../../components/HeaderDashboard";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative z-50">
            <HeaderDashboard /> 
            <main>{children}</main>
        </div>
    );
} 