"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";

interface FormProps{
  goBackClick: () => void
  goNextClick?: () => void
}

export default function Step1({ goBackClick, goNextClick }: FormProps){
  return(
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[88%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">Qual a <br /> quantidade?</span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">Qual a quantidade do produto que <br /> 
        ostaria de colocar a venda no nosso <br /> centro de distribuição?</span>
        <div className="w-full h-full">
          <form className="w-full h-full flex flex-col gap-3 mt-4 justify-between">
            <div className="w-full flex">
              <Input className="text-primary text-sm w-[170px]" label="Quantidade" />
            </div>

            <div>
            <Button className="text-white border-0 p-2 bg-[#3E5155]" title="Continuar" />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[12%] flex items-end justify-between">
        <div className="w-full flex items-center">
          <LuChevronLeft className="w-[30px] h-[30px] text-[#3E5155]" />
          <Button 
            title="Voltar"
            className="flex items-center gap-2 text-sm font-medium text-[#3E5155]"
            onClick={goBackClick}
          >
          </Button>
        </div>
        <div>
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
        </div>
      </div>
    </div>
  )
}
