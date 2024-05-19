import { HiOutlineSearch } from "react-icons/hi";
import Footer from "@shared/components/Footer";
import SendBagTable from "./components/SendBagTable";
import DeliveriesTable from "../../entregas/components/DeliveriesTable";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";
import Button from "@shared/components/Button";

export default function Home() {
  return (
    // <div className="flex flex-col h-screen bg-theme-background p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20 flex-1">
    //   <div className="flex w-full flex-col h-3/4">
    //     <span className="text-center text-3xl font-inter font-medium text-slate-gray">
    //       Enviar sacolas
    //     </span>
    //     <span className="mt-2 text-center text-sm font-inter font-medium text-slate-gray">
    //       Envie as sacolas abaixo:
    //     </span>
    //   </div>
    //   <div className="relative mt-10">
    //     <input
    //       className="border border-[#D1D1D6] rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
    //       type="text"
    //     />
    //     <HiOutlineSearch
    //       className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
    //       size={24}
    //     />
    //   </div>
    //   <div className="mt-5 flex gap-x-10 mb-12">
    //     <SendBagTable />
    //   </div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>
    <div className="flex flex-col bg-theme-background px-5 pt-16 justify-start">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Enviar sacolas
      </span>
      <span className="mt-2 text-center text-sm font-medium text-slate-gray">
        Envie as sacolas abaixo:
      </span>
      <div className="relative mt-10 h-auto">
        <input
          className="border border-french-gray rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
          type="text"
        />
        <HiOutlineSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <div className="mt-8 h-3/5 flex gap-x-10">
        <SendBagTable />
      </div>
    </div>
  );
}
