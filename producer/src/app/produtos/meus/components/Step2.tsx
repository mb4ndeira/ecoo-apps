import Button from "@/components/Button";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosHelp } from "react-icons/io";

interface FormProps{
  goBackClick: () => void
}

export default function Step2({ goBackClick }: FormProps){
  return(
    <div className="w-full h-screen flex justify-center flex-col p-4">
      <div className="w-full h-4/5 flex items-center flex-col justify-center">
        <AiFillCheckCircle className="w-[100px] h-[100px] text-rain-forest" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Produto <br /> removido!
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Este produto não está mais a <br /> venda pela cooperativa.
        </span>
      </div>
      <div className="w-full h-1/5 bg-red flex flex-col justify-end gap-4">
        <Link href={"/"}>
          <Button
            className="font-semibold text-primary border-primary border-2 py-[10px]"
            title="Voltar para a tela inicial"
          />
        </Link>
        <Button onClick={goBackClick}
          className="font-semibold  bg-slate-gray text-white border-slate-gray border-2 py-[10px]"
          title="Remover outro produto"
        />
        <div className="w-full flex justify-end">
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
        </div>
      </div>
    </div>
  )
}