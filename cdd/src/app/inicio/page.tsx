import Image from "next/image";
import Link from "next/link";

import OldButton from "@shared/components/OldButton";

export default function Inicio() {
  return (
    <div className="h-screen bg-walnut-brown w-full flex pl-3 pr-3 pt-3 flex-col">
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

      <div className="flex h-[15%] flex-col w-full justify-center mt-10 text-center">
        <Link href={"/login"}>
          <OldButton className="bg-white text-theme-default" title="Entrar" />
        </Link>
        <Link href={"/cadastrar"}>
          <OldButton
            className="text-white text border-2 border-white"
            title="Cadastrar"
          />
        </Link>
      </div>

      <div className="h-3/5 w-full flex items-end mt-4">
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
