import { HiOutlineSearch } from "react-icons/hi";
import BagsTable from "./components/BagsTable";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import Button from "@shared/components/Button";
import { IoIosHelp } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col bg-theme-background px-5 pt-16 justify-start">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Montar sacolas
      </span>
      <span className="mt-2 text-center text-sm font-medium text-slate-gray">
        Monte as sacolas abaixo:
      </span>
      <div className="relative mt-10 h-auto">
        <input
          className="border border-[#D1D1D6] rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
          type="text"
        />
        <HiOutlineSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <div className="mt-3 flex gap-x-10 overflow-y-auto">
        <BagsTable />
      </div>
    </div>
  );
}
