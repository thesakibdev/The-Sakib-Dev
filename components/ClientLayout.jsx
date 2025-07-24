"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Header from "./Header";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <>
          <Header />
          <NavBar />
        </>
      )}
      {children}
    </>
  );
} 