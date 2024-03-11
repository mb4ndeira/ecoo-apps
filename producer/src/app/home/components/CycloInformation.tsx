import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";  

export default function CycloInformaiton(){
  return (
    <div className="mt-5 w-full h-fit py-5 rounded-2xl bg-white p-4">
      <div className="flex justify-between items-center">
        <p className="text-default text-[16px]">É hora de: <span className="text-[#00735E] font-bold">fazer a sua oferta</span></p>
        <Link href='/informacoesciclo'><HiOutlineInformationCircle className="text-[24px] text-slate-blue" /></Link>
      </div>
    </div>
  )
}