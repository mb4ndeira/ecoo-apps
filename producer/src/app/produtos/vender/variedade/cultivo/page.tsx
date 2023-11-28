import Link from "next/link";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-[#2F4A4D] max-w-[1000px] mx-auto">
      <span className="text-center text-[30px] font-medium leading-[34px]">
        Qual o modo <br />
        de cultivo?
      </span>
      <span className="mt-5 text-center text-sm font-medium">
        Selecione a forma em que o produto é cultivado na sua propriedade
      </span>
      <div className="mt-5 w-full max-h-[550px] overflow-y-scroll ">
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-left text-base leading-[20px]">
                  Convencional
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Utiliza fertilizantes químicos e pesticidas sintéticos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-left text-base leading-[20px]">
                  Orgânico
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Baseia-se em práticas naturais, sem o uso de produtos químicos
                  sintéticos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-left text-base leading-[20px]">
                  Em transição agroecológica
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Fase de transição para métodos sustentáveis, reduzindo a
                  dependência de produtos químicos.
                </span>
              </div>
            </div>
          </button>
        </Link>
        <Link href="/produtos/vender/adicionar">
          <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-left text-base leading-[20px]">
                  Hidroponia
                </span>
                <span className="mt-1 text-[10px] text-left">
                  Crescimento de plantas em água, sem solo, fornecendo
                  nutrientes diretamente às raízes.
                </span>
              </div>
            </div>
          </button>
        </Link>
      </div>
      <Footer backButton={true} />
    </div>
  );
}
