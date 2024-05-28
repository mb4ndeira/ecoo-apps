import React from "react";
import { AppID } from "../../library/types/app-id";

import Image from "next/image";

export default function UnderConstruction({ appID }: { appID: AppID }) {
  return (
    <div className="flex flex-col min-h-[var(--min-page-height)] justify-between items-center pt-20">
      <div className="flex flex-col items-center gap-2 pt-10">
        <span className="text-center text-3xl font-medium text-slate-gray w-1/2 flex items-center justify-center">
          Página em construção!
        </span>
        <div className="text-center text-slate-gray mt-4 w-[30ch] flex flex-col items-center gap-6 text-sm font-medium leading-relaxed">
          <p>
            Nosso sistema está em fase de desenvolvimento e a página que você
            acessou ainda não está pronta.
          </p>
          <p>
            Estamos trabalhando para que a sua experiência seja a melhor o
            possível, agradecemos a compreensão!
          </p>
        </div>
      </div>
      <div className="w-[100vw] max-w-[var(--max-w-md)] min-h-[calc((var(--max-w-md)*235)/360)] relative">
        <Image
          src="/construcao.png"
          alt="Em construção"
          width={360}
          height={235}
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
