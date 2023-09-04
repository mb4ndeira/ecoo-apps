'use-client'

import Input from "@/components/Input"
import { MdMailOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai"

export default function Authentication() {
  return (
    <>
      <span className='text-2xl text- leading-10 font-semibold'>
        Fazer login
      </span>

      <div className='mt-4'/>

      <Input
        label='Email'
        icon={<MdMailOutline />}
      />

      <Input 
        label='Senha'
        icon={<AiFillEye />}
      />

      <button className="text-center h-[42px] bg-slate-gray text-ghost-white-100 rounded-md w-full p-2 font-semibold mt-6">
        Entrar
      </button>
    </>
  )
}