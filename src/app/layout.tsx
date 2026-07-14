import type { Metadata } from "next";
import {  Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['500','600','700','800'],
});


export const metadata: Metadata = {
  title: "TC Verification - SVMKD",
  description: "Ramkali Devi Saraswati Vidya Mandir Students can verify and download their TC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", outfit.className, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-primary">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
