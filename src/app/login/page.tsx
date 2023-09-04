import Image from 'next/image'
import logo from '@/assets/logo/light.svg'
import bag from '@/assets/bag.png'
import Authentication from './components/authentication';
import NewAccount from './components/new-account';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen pt-6 px-5 bg-slate-gray">
       <Image
          src={logo}
          width={200}
          height={80}
          alt="e-COO"
          className='mx-auto'
      />
      <span className=' text-2xl text-ghost-white-base leading-10 font-semibold mt-2 mb-10 text-center'>
        A plataforma de gestão da agricultura familiar
      </span>

      <div className="bg-ghost-white-base px-5 py-5 rounded-2xl tran">
        <Authentication/>
        <NewAccount />
        <button className="flex text-center mx-auto mt-6 text-slate-gray underline decoration-1">
          Esqueceu sua senha?
        </button>
      </div>

      <span className='text-ghost-white-100 text-[10px] flex mx-auto mt-8 text-center'>
        Versão 1.0.0 - Copyright © e-COO 2023. <br />
        Todos os direitos reservados
      </span>

      <Image
        src={bag}
        width={200}
        alt="e-COO"
        className='mx-auto mt-auto'
      />
    </div>
  )
}