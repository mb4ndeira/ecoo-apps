import Image from "next/image";

import logo from "@/assets/logo/dark.svg";

export function Footer() {
  return (
    <div className="flex items-center gap-10 min-h-[37px] lg:pl-3">
      <Image
        className="hidden sm:block"
        src={logo}
        alt="e-COO logotipo"
        width="112"
        height="37"
      />
      <p className="text-sm sm:text-base">
        Versão 1.0.0 - Copyright © e-COO 2023.
        <br /> Todos os direitos reservados
      </p>
    </div>
  );
}
