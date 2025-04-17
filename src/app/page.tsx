'use client'

import HomePage from "./_components/HomePage";
import { trackPageView } from "../lib/analytics";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname || "/");
  }, [pathname]);

  return (
    <div>
      <HomePage />
    </div>
  );
}