import { HiOutlineSearch } from "react-icons/hi";
import BagsTable from "./components/BagsTable";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import Button from "@shared/components/Button";
import { IoIosHelp } from "react-icons/io";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-background p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20">
      <div className="flex flex-col h-[15%] justify-end">
        <span className="text-center text-3xl font-inter font-medium text-slate-gray">
          Montar sacolas
        </span>
        <span className="mt-2 text-center text-sm font-inter font-medium text-slate-gray">
          Monte as sacolas abaixo:
        </span>
      </div>
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
      <div className="mt-3 h-3/5 flex gap-x-10 overflow-y-auto">
        <BagsTable />
      </div>
      {/* <div className="h-[15%] w-full flex justify-between items-end">
        <Link href={"/"} className="flex items-center">
        <LuChevronLeft className="w-[30px] h-[30px] text-default" />
          <Button
            title="Voltar"
            className="flex items-center gap-2 text-sm font-medium text-default w-auto"
          />
        </Link>
        <div className="">
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
        </div>
      </div> */}
    </div>
  );
}
