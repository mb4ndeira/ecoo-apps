import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LayoutProvider } from "@/providers/layout-provider";

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
      <body className={"flex flex-row w-full h-screen " + poppins.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
