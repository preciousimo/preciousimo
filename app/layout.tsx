import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Precious Imoniakemu — Software & DevOps Engineer",
  description: "Backend-heavy Software & DevOps Engineer building secure, scalable systems across fintech, healthtech, and cloud infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
