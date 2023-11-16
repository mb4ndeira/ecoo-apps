"use client";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

const varieties = [
  {
    from: "001",
    name: "Tomate Gaúcho",
    description: "Grande, redondo, cores variadas, polpa suculenta.",
  },
  {
    from: "001",
    name: "Tomate Italiano",
    description: "Alongado, grande, pele lisa, polpa densa para molhos.",
  },
  {
    from: "002",
    name: "Batata Inglesa",
    description: "Batata Inglesa",
  },
];

export default function Home() {
  const searchParams = useSearchParams();
  const idUrl: string | null = searchParams.get("id");
  const filteredVarieties = varieties.filter(
    (variety) => variety.from === idUrl
  );

  return (
    <div className="flex flex-col bg-background text-[#2F4A4D]">
      <span className="text-center text-3xl">
        Escolha a <br />
        variedade
      </span>
      <span className="mt-5 text-center text-sm">
        Selecione uma das variedades do produto que irá vender
      </span>
      <div className="mt-5 w-full max-h-[450px] overflow-y-scroll ">
        {filteredVarieties.map((variety) => (
          <button
            key={variety.from}
            className="min-h-[7.5rem] h-fit w-full bg-white rounded-2xl mx-auto flex flex-col mt-2"
          >
            <div className="flex h-full">
              <div className="bg-rain-forest w-4/12  mr-auto ml-2 mt-[10px] mb-[10px] rounded-[10px] flex-shrink-0"></div>
              <div className="flex flex-col p-2 min-h-[7.5rem] ">
                <span className="text-lg">{variety.name}</span>
                <span className="text-xs">{variety.description}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Footer backButton={true} />
    </div>
  );
}
