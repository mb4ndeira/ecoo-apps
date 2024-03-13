import Image from "next/image";
import Link from "next/link";

import Button from "@shared/components/Button";

export default function Inicio() {
  return (
    <div className="h-screen bg-slate-gray w-full flex pl-3 pr-3 pt-3 flex-col">
      <div className="w-full h-1/4 flex items-center flex-col justify-center gap-5 mt-3">
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

      <div className="flex h-1/5 flex-col w-full space-y-[10px] mt-10 text-center">
        <Link href={"/login"}>
          <Button className="bg-white text-slate-gray" title="Entrar" />
        </Link>
        <Link href={"/cadastrar"}>
          <Button
            className="text-white text border-2 border-white"
            title="Cadastrar"
          />
        </Link>
        <span className="font-medium text-sm text-white">
          Continuar como{" "}
          <span className="border-b border-white">visitante</span>
        </span>
      </div>

      <div className="h-[55%] w-full flex justify-center items-end mt-4">
        <Image
          src="/bag.png"
          alt="bag"
          width={279}
          height={349}
          className="mr-14 h-[90%] w-full object-contain"
        />
      </div>
    </div>
  );
}
