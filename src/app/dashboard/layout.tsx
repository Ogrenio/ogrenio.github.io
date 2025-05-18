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
import Footer from "@/components/Footer";
import HeaderDashboard from "../../components/HeaderDashboard";  
//import { Source_Sans_3, Manrope } from "next/font/google";

//const manrope = Manrope({ subsets: ['latin'] });
//const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
            <body className="antialiased">
                <HeaderDashboard /> 
                <main>{children}</main>
                <Footer />
            </body>
    );
} 