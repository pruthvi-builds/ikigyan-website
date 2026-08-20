import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Ikigyan — Curiosity. Knowledge. Real-World Learning.",
  description:
    "Ikigyan helps children discover the world beyond textbooks — through a 26-week school programme, books, activities and curated real-world knowledge.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
