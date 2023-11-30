import Footer from "@/components/Footer";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-background text-slate-gray px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="">
          <IoCheckmarkCircle className="text-[100px] text-[#00735E]" />
        </div>

        <span className="text-center text-3xl font-medium">
          A entrega foi rejeitada!
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          A entrega #205004 do produtor José da Silva foi rejeitada.
        </span>
      </div>
      <div className="mt-10 mb-[55px]">
        <Link href={"/"}>
          <button className="w-full bg-[#F7F7F7] rounded-md h-12 mb-[12px] text-[#3E5155] border-2 border-[#3E5155] font-semibold">
            Voltar para a tela inicial
          </button>
        </Link>
        <Link href={"/entregas"}>
          <button className="w-full bg-[#3E5155] rounded-md h-12 text-white font-semibold">
            Verificar outra entrega
          </button>
        </Link>
      </div>
      <Footer backButton={false} />
    </div>
  );
}
