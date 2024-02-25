import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      <body className={"w-full h-full min-h-screen" + poppins.className}>
        <div className="flex flex-row justify-center w-full h-full min-h-screen bg-white">
          <div className="relative max-w-md w-full h-full min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
