import Image from 'next/image'
import logo from '@/assets/logo/light.svg'
import bag from '@/assets/bag.png'
import Authentication from './components/authentication';
import NewAccount from './components/new-account';

export default function Login() {
  return (
    <div className="h-screen bg-slate-gray px-5">
       <div className='flex flex-col items-center'>
          <Image
            src={logo}
            width={200}
            height={80}
            alt="e-COO"
            className='mt-8'
          />
          <span className='text-2xl text-ghost-white-base leading-10 font-semibold text-center mt-2'>
            A plataforma de gestão da <br />
            agricultura familiar
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <div className="bg-ghost-white-base p-5 rounded-md mt-10">
            <Authentication/>
            <NewAccount />
            <button className="flex text-center mx-auto mt-6 text-slate-gray underline decoration-1">
              Esqueceu sua senha?
            </button>
          </div>

          <span className='text-ghost-white-100 text-[10px] mt-4 text-center'>
            Versão 1.0.0 - Copyright © e-COO 2023. <br />
            Todos os direitos reservados
          </span>
       </div>
    </div>
  )
}