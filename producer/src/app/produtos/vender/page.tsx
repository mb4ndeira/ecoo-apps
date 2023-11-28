import Footer from "@/components/Footer";
import { HiOutlineSearch } from "react-icons/hi";
import { Products } from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-[#2F4A4D] max-w-[1000px] mx-auto px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <span className="text-center text-[30px] font-medium leading-[34px]">
        Escolha um <br />
        produto
      </span>
      <span className="mt-5 text-center text-sm font-medium">
        Este produto será disponibilizado para a venda através da plataforma
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
      <Products />
      <Footer backButton={true} />
    </div>
  );
}
