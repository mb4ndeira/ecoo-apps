import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-[#2F4A4D]">
      <span className="text-center text-3xl">
        Qual a forma de <br />
        comercialização?
      </span>
      <span className="mt-5 text-center text-sm">
        Selecione a forma em que o produto será comercializado
      </span>
      <div className="mt-5 w-full max-h-[550px] overflow-y-scroll ">
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">No gelo</span>
              <span className="text-xs">
                Mantidos em condições refrigeradas com gelo para conservação
                temporária.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Congelado</span>
              <span className="text-xs">
                Armazenados em temperaturas abaixo de -18ºC para manter a
                frescura.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Salgado</span>
              <span className="text-xs">
                Conservados em sal para desidratação e preservação.
              </span>
            </div>
          </div>
        </button>
        <button className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2">
          <div className="flex h-full">
            <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
            <div className="flex flex-col p-2 min-h-[7.5rem] ">
              <span className="text-lg">Defumado</span>
              <span className="text-xs">
                Submetidos a fumaça para sabor e conservação.
              </span>
            </div>
          </div>
        </button>
      </div>
      <Footer backButton={true} />
    </div>
  );
}
