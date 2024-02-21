'use client'

import { HiOutlineSearch } from "react-icons/hi";

import DeliveriesTable from "./components/DeliveriesTable";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="mt-10 min-h-full flex flex-col bg-background px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Lista de entregas
      </span>
      <span className="mt-2 text-center text-sm font-medium text-slate-gray">
        Aprove ou rejeite as entregas abaixo:
      </span>
      <div className="relative mt-10">
        <input
          className="border border-french-gray rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
          type="text"
        />
        <HiOutlineSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <div className="mt-3 flex gap-x-10">
        <DeliveriesTable />
      </div>
      <Footer />
    </div>
  );
}
