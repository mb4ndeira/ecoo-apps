'use client'

import { GetCycles } from "@producer/app/_actions/products/GetCycles";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";  

export default function CycloInformaiton(){
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    (async () => {
      const cycles = await GetCycles()

      if(cycles?.reply){
        const diaAtual = new Date().getDay() + 1
        
        const { offering, ordering, dispatching } = cycles.reply[0]
        
        if(Array.isArray(offering) && offering.includes(diaAtual)){
          setMessage(" fazer a sua oferta")
        } else if(Array.isArray(ordering) && ordering.includes(diaAtual)){
          setMessage(" entregar ao CDD")
        } else if(Array.isArray(dispatching) && dispatching.includes(diaAtual)){
          setMessage(" CDD entregar os pedidos")
        }
      }
    })()
  },[])

  return (
    <div className="mt-5 w-full h-fit py-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between items-center">
        <p className="text-default text-[16px]">É hora de: <span className="text-[#00735E] font-bold">{message}</span></p>
        <Link href='/informacoesciclo'><HiOutlineInformationCircle className="text-[24px] text-slate-blue" /></Link>
      </div>
    </div>
  )
}