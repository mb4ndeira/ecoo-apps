import Image from "next/image";
import Link from "next/link";

import Button from "@shared/components/Button";

export default function Inicio() {
  return (
    <div className="h-screen bg-slate-gray w-full flex pl-3 pr-3 pt-3 flex-col">
      <div className="w-full h-1/4 flex items-center flex-col justify-end gap-5 mt-3">
        <Image
          src="/logo/light.svg"
          width={180}
          height={60}
          alt="e-COO"
          className=""
        />
        <span className="text-center text-white font-medium text-sm">
          Inovação e tecnologia social para o <br /> fortalecimento da
          agricultura familiar
        </span>
      </div>

      <div className="flex h-1/5 flex-col w-full justify-center space-y-[10px] mt-10 text-center">
        <Link href={"/login"}>
          <Button className="w-full px-3 py-4 font-semibold rounded-lg text-base text-slate-gray border-0 p-2 bg-white">Entrar</Button>
        </Link>
        <Link href={"/cadastrar"}>
          <Button className="w-full px-3 py-4 font-semibold rounded-lg text-base text-white p-2 border-white border-2">Cadastrar</Button>
        </Link>
      </div>

      <div className="h-[55%] w-full flex justify-center items-end mt-4">
        <Image
          src="/bag.png"
          alt="bag"
          width={279}
          height={349}
          className="mr-14 w-full object-contain"
        />
      </div>
    </div>
  );
}
