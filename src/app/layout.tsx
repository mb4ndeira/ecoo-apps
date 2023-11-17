import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Painel e-COO",
  description: "Administração para cooperados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "flex w-full h-full min-h-screen " +
          poppins.className +
          " " +
          inter.className
        }
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
