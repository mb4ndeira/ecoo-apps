"use client";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import MiniTable from "./components/MiniTable";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

const fakeData = [
  {
    id: 123456,
    nome: "João Fonseca",
    situacao: "Pendente",
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
  {
    id: 234567,
    nome: "Maria Fernandes",
    situacao: "Concluída",
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
  {
    id: 345678,
    nome: "Carlos Augusto",
    situacao: "Rejeitada",
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
  {
    id: 456789,
    nome: "Cristiano Ronaldo",
    situacao: "Concluída",
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
  {
    id: 567890,
    nome: "Sérgio Gouvea",
    situacao: "Concluída",
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
  {
    id: 678901,
    nome: "Tarsila do Amaral",
    situacao: "Concluída",
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
  {
    id: 789012,
    nome: "Lionel Messi",
    situacao: "Concluída",
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
  {
    id: 8910123,
    nome: "Sandra de Sá",
    situacao: "Concluída",
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
  {
    id: 901234,
    nome: "Tyler Herro",
    situacao: "Concluída",
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const idUrl: string | null = searchParams.get("id");
  const idString: string = idUrl!;
  const entregaSelecionada = fakeData.find(
    (entrega) => entrega.id === parseInt(idString)
  );

  if (!entregaSelecionada) {
    return (
      <div className="mt-10 flex flex-col bg-background">
        <span className="text-center text-3xl font-medium">
          Verificar entrega
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          Entrega não encontrada.
        </span>
        <Footer backButton={false} />
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col bg-background">
      <span className="text-center text-3xl font-medium">
        Verificar entrega
      </span>
      <span className="mt-2 text-center text-sm font-medium">
        Confira os dados abaixo:
      </span>
      <div className="mt-5 bg-white h-fit w-full rounded-xl">
        <MiniTable entrega={entregaSelecionada} />
      </div>
      <div className="mt-5 flex gap-x-3">
        <button className="h-11 w-3/5 bg-white rounded-md font-poppins font-semibold text-[#545F71] border-2 border-[#545F71]">
          Rejeitar
        </button>
        <button className="h-11 w-3/5 ml-auto bg-[#545F71] rounded-md font-poppins font-semibold text-white">
          Aprovar
        </button>
      </div>
      {/* <Link href="./">
        <button className="h-[50px] fixed bottom-[5px] left-[17px] flex">
          <HiOutlineChevronLeft size={24} color="#000" />
          <span>Voltar</span>
        </button>
      </Link>
      <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
        ?
      </button> */}
      <Footer backButton={false} />
    </div>
  );
}
