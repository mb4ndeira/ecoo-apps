'use client'

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosHelp } from "react-icons/io";
import { LuChevronLeft, LuPencil } from "react-icons/lu";

export default function Meus(){  
  const [openExcluirModal, setOpenExcluirModal] = useState(false)

  const openModal = () => {
    setOpenExcluirModal(!openExcluirModal)
  }

  const closeModal = () => {
    setOpenExcluirModal(!openExcluirModal)
  }

  return(
    <div className="w-full h-screen flex flex-col items-center p-5 bg-background">
      <div className="flex flex-col items-center h-1/4 justify-center mt-2 w-full space-y-5">
        <h1 className="text-3xl text-slate-gray font-medium">Meus produtos</h1>
        <span className="text-center text-slate-gray text-sm font-medium">Lista dos seus produtos que estão a <br />venda pela cooperativa</span>
      </div>
      <div className="w-full h-3/4 flex flex-col justify-between">
        <div>
          <table className="bg-white w-full p-10 rounded-lg text-primary">
            <tbody>
              <tr>
                <td className="p-3 w-1/5">20kg</td>
                <td className="p-3 w-3/5">batata branca</td>
                <td className="p-3 w-[10%]"><LuPencil /></td>
                <td className="p-3 w-[10%] hover:text-[#FF7070] delay-200 
                transition-colors"><FaRegTrashAlt className="z-10" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full h-full flex justify-between items-end">
          <div className="w-full flex items-center">
            <LuChevronLeft className="w-[30px] h-[30px] text-[#3E5155]" />
            <Button 
              title="Voltar"
              className="flex items-center gap-2 text-sm font-medium text-[#3E5155]"
            >
            </Button>
          </div>
          <div>
            <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
          </div>
        </div>
      </div>
    </div>
  )
}