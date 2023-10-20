import Image from 'next/image'
import logo from '@/assets/logo/light.svg'
import Button from './components/Button'
import Link from 'next/link'
import bag from '@/assets/bag.png'

export default function Inicio() {
  return (
    <div className="h-screen bg-slate-gray w-full flex pl-3 pr-3 pt-3 flex-col">
        <div className='w-full flex items-center flex-col mb-4'>
          <Image
            src={logo}
            width={180}
            height={60}
            alt="e-COO"
            className='mt-20 mb-4'
          />
          <span className='text-center text-white font-medium text-sm'>Inovação e tecnologia social para o <br /> fortalecimento da agricultura familiar</span>
        </div>

        <div className='flex flex-col w-full space-y-[10px] mt-10 text-center'>
          <Link href={'/login'}>
            <Button className='bg-white text-slate-gray' title='Entrar'/> 
          </Link>
          <Link href={'/register'}>
            <Button className='text-white border-2 border-white' title='Cadastrar'/>
          </Link>
          <span className='font-medium text-sm text-white'>Continuar como <Link className='border-b border-white' href={''}>visitante</Link></span>
        </div>

        <div className='h-screen w-full flex justify-center mt-10'>
          <Image
          src={bag}
          alt="bag"
          width={340}
          height={349}
          className='mr-10'
          />
        </div>
    </div>
  )
}
