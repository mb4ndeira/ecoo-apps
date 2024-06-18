import { HiOutlineSearch } from "react-icons/hi";
import BagsTable from "./components/BagsTable";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import Button from "@shared/components/Button";
import { IoIosHelp } from "react-icons/io";
import DownloadButton from "@shared/components/DownloadButton";
import { LuDownload } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col pt-16 items-center h-[13.35rem] pb-4 w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Montar sacolas
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Monte as sacolas abaixo
        </span>
        <div className="w-full flex justify-end h-auto align-middle mt-5 gap-x-1">
          <div className="relative h-12 w-full">
            <input
              className="border border-[#D1D1D6] rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
              type="text"
            />
            <HiOutlineSearch
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              size={24}
            />
          </div>
          <DownloadButton
            className="bg-walnut-brown text-white font-semibold rounded-md h-12 w-[3.7rem] flex justify-center items-center"
            children={<LuDownload size={24} />}
          />
        </div>
      </div>
      <div className="h-[calc(var(--min-page-height)-13.35rem)] w-full">
        <BagsTable />
      </div>
    </div>
  );
}
