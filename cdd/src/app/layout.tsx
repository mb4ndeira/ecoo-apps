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
      <body className={"w-screen h-screen" + " " + poppins.className}>
        <div className="max-w-md w-full mx-auto min-h-screen h-full">
          <main className="flex flex-col w-full bg-background h-full min-h-screen">
            <Toaster richColors position="top-right" />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
