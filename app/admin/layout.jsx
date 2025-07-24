import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="admin-main-layout">{children}</div>
      </body>
    </html>
  );
}
