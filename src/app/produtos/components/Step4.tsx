"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";

interface FormProps{
  goBackClick: () => void
  goNextClick: () => void
}

export default function Step4({ goBackClick, goNextClick }: FormProps){
  return(
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[90%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Revise as <br /> informações
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Revise todas as informações antes de <br /> 
          colocar o seu produto a venda
        </span>
        <div className="w-full h-full flex flex-col justify-between mt-5">
        <table className="bg-white w-full p-10 rounded-lg text-primary text-">
            <tbody>
              <tr>
                <td className="w-1/4 p-3">Produto: </td>
                <td className="w-3/4 p-3">Tomate</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Variedade:</td>
                <td className="w-3/4 p-3">Italiano</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Quantidade:</td>
                <td className="w-3/4 p-3">200kg</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Válido até:</td>
                <td className="w-3/4 p-3">22/10/2023</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Preço:</td>
                <td className="w-3/4 p-3">R$ 6,45 / kg</td>
              </tr>
            </tbody>
          </table>

          <Button onClick={goNextClick} className="text-white border-0 p-2 bg-[#3E5155]" title="Confirmar e colocar a venda" />
        </div>
      </div>
      <div className="w-full h-[10%] flex items-end justify-between">
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
