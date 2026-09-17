import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "../components/Sidebar";

import { Geist_Mono, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DSA Visualizer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${geistMono.variable}`}>
      <body className="h-full flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
