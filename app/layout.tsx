import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Precious Imoniakemu | Software & DevOps Engineer",
    template: "%s | Precious Imoniakemu",
  },
  description: "Precious Imoniakemu is a seasoned Software & DevOps Engineer specializing in AWS Cloud Infrastructure, NestJS Microservices, and AI Agent Orchestration. Based in Lagos, NG.",
  keywords: [
    "Precious Imoniakemu",
    "Software Engineer",
    "DevOps Engineer",
    "Cloud Architect",
    "AWS",
    "NestJS",
    "TypeScript",
    "Python",
    "AI Agents",
    "Microservices",
    "Lagos",
    "Nigeria",
    "Precious Imo"
  ],
  authors: [{ name: "Precious Imoniakemu" }],
  creator: "Precious Imoniakemu",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://github.com/preciousimo",
    title: "Precious Imoniakemu | Software & DevOps Engineer",
    description: "Backend-heavy Software & DevOps Engineer building secure, scalable systems across fintech, healthtech, and cloud infrastructure.",
    siteName: "Precious Imoniakemu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Imoniakemu | Software & DevOps Engineer",
    description: "Backend-heavy Software & DevOps Engineer building secure, scalable systems across fintech, healthtech, and cloud infrastructure.",
    creator: "@preciousimo2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Ambient Lighting Layers */}
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
        <div className="ambient-glow glow-3" />
        
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
