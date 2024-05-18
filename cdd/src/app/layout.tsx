import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { setAppID } from "@shared/next/library/set-app-id";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
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
  setAppID("CDD");

  return (
    <html lang="en">
      <body className={"w-screen h-screen" + " " + poppins.className}>
        <div className="flex flex-row justify-center w-full h-full">
          <Toaster richColors position="top-right" />
          <div className="relative max-w-md w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
