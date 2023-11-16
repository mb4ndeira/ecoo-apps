import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <span className="text-center text-3xl">
        Qual o modo <br />
        de cultivo?
      </span>
      <span className="mt-5 text-center text-sm">
        Selecione a forma em que o produto é cultivado na sua propriedade
      </span>
      <div className="mt-5 w-full max-h-[550px] overflow-y-scroll ">
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Convencional</span>
              <span className="text-xs">
                Utiliza fertilizantes químicos e pesticidas sintéticos.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Orgânico</span>
              <span className="text-xs">
                Baseia-se em práticas naturais, sem o uso de produtos químicos
                sintéticos.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Em transição agroecológica</span>
              <span className="text-xs">
                Fase de transição para métodos sustentáveis, reduzindo a
                dependência de produtos químicos.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Hidroponia</span>
              <span className="text-xs">
                Crescimento de plantas em água, sem solo, fornecendo nutrientes
                diretamente às raízes.
              </span>
            </div>
          </div>
        </button>
      </div>
      <Footer backButton={true} />
    </div>
  );
}
