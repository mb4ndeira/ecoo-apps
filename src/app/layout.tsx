import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Sidebar from "./components/Sidebar";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Painel e-COO",
  description: "Administração de cooperativa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + "w-full flex"}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
