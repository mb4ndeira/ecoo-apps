import Link from "next/link";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import MiniTable from "./components/MiniTable";

const fakeData = [
  {
    id: 123456,
    nome: "João Fonseca",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
];

export default function Home() {
  return (
    <div className="mt-10 flex flex-col bg-background">
      <span className="text-center text-3xl font-medium">
        Verificar entrega
      </span>
      <span className="mt-2 text-center text-sm font-medium">
        Confira os dados abaixo:
      </span>
      <div className="mt-5 bg-white h-fit w-full rounded-xl">
        {fakeData.map((entrega, index) => (
          <MiniTable entrega={entrega} key={index} />
        ))}
      </div>
      <div className="mt-5 flex gap-x-3">
        <button className="h-11 w-3/5 bg-white rounded-md font-poppins font-semibold text-[#545F71] border-2 border-[#545F71]">
          Rejeitar
        </button>
        <button className="h-11 w-3/5 ml-auto bg-[#545F71] rounded-md font-poppins font-semibold text-white">
          Aprovar
        </button>
      </div>
      <Link href="./">
        <button className="h-[50px] fixed bottom-[5px] left-[17px] flex">
          <HiOutlineChevronLeft size={24} color="#000" />
          <span>Voltar</span>
        </button>
      </Link>
      <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
        ?
      </button>
    </div>
  );
}
