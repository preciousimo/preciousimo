import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Precious Imoniakemu | Software & DevOps Engineer",
    template: "%s | Precious Imoniakemu",
  },
  description: "Precious Imoniakemu is a seasoned Full-Stack Software & DevOps Engineer specializing in React, Next.js, Django, AWS Cloud Infrastructure, and AI Agent Orchestration.",
  keywords: [
    "Precious Imoniakemu",
    "Full-Stack Engineer",
    "Software Engineer",
    "DevOps Engineer",
    "React",
    "Next.js",
    "React Native",
    "Django",
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
