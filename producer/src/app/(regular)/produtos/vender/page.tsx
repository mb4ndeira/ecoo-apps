import { HiOutlineSearch } from "react-icons/hi";

import { Products } from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 bg-background text-slate-gray">
      <span className="mt-14 text-[30px] leading-[34px] text-center font-medium">
        Escolha um <br />
        produto
      </span>
      <span className="mt-4 max-w-[270px] text-sm font-medium text-center">
        Este produto será disponibilizado para a venda através da plataforma
      </span>
      <div className="relative mt-8 w-full">
        <input
          className="border border-french-gray rounded-md h-12 p-4 pr-10 text-base inter-font w-full"
          type="text"
        />
        <HiOutlineSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <Products />
    </div>
  );
}
