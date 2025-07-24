import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
