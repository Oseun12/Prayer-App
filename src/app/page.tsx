'use client'

import HomePage from "./home/_components/HomePage";
import { trackPageView } from "../lib/analytics";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// import DashboardLayout from "@/components/DashboardLayout";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname || "/");
  }, [pathname]);

  return (
    <div>
      {/* <DashboardLayout> */}
      <HomePage />
      {/* </DashboardLayout> */}
    </div>
  );
}