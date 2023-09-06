import Image from 'next/image'
import logo from '@/assets/logo/light.svg'
import bag from '@/assets/bag.png'
import Authentication from './components/authentication';
import NewAccount from './components/new-account';
import { FiChevronRight } from 'react-icons/fi'

export default function Login() {
  return (
    <div className="h-screen bg-slate-gray px-5 lg:px-0 lg:flex lg:flex-row">
       <div className='flex flex-col items-center lg:w-[calc(65%-160px)] lg:justify-center lg:items-start lg:ml-40 relative'>
          <Image
            src={logo}
            width={200}
            height={80}
            alt="e-COO"
            className='mt-8 lg:hidden'
          />

          <Image
            src={logo}
            width={300}
            height={80}
            alt="e-COO"
            className='hidden lg:flex mt-auto'
          />
          <span className='text-2xl text-ghost-white-base leading-10 font-semibold text-center mt-2 lg:text-4xl lg:text-start lg:leading-[50px]'>
            A plataforma de gestão da <br />
            agricultura familiar
          </span>

          <Image
            src={bag}
            alt="bag"
            width={450}
            className='hidden lg:flex mt-10 -ml-40'
          />

          <div className='p-10 bg-slate-gray flex items-start justify-center rounded-full -mr-8 absolute bottom-[10%] right-0 text-6xl'>
            <FiChevronRight color="white" />
          </div>
        </div>

        <div className='flex flex-col items-center lg:w-[35%] lg:bg-ghost-white-base lg:justify-center'>
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