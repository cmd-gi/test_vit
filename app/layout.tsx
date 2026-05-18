import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charan — AI-Powered Visual Experiences",
  description: "Cinematic portfolio of Charan: AI art, videos, photography, and web development projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
