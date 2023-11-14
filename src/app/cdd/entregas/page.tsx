import { HiOutlineChevronLeft, HiOutlineSearch } from "react-icons/hi";
import DeliveriesTable from "./components/DeliveriesTable";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col bg-background">
      <span className="text-center text-3xl font-poppins font-medium">
        Lista de entregas
      </span>
      <span className="mt-2 text-center text-sm font-poppins font-medium">
        Aprove ou rejeite as entregas abaixo:
      </span>
      <div className="relative mt-10">
        <input
          className="border border-[#D1D1D6] rounded-md h-12 p-4 pr-10 text-base inter-font w-full"
          type="text"
        />
        <HiOutlineSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <div className="mt-5 flex gap-x-10">
        <DeliveriesTable />
      </div>
      <Link href="./">
        <button className="h-[50px] fixed bottom-[5px] left-[17px] flex">
          <HiOutlineChevronLeft size={24} color="#000" />
          <span>Voltar</span>
        </button>
      </Link>
      <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
        ?
      </button>
    </div>
  );
}
