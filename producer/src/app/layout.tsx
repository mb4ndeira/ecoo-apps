import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from 'sonner';

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
  return (
    <html lang="en">
      <body className={"flex w-full h-full min-h-screen " + poppins.className}>
        <main className="flex flex-col w-full  bg-background">
          <Toaster richColors position="top-right" />
          {children}
        </main>
      </body>
    </html>
  );
}
