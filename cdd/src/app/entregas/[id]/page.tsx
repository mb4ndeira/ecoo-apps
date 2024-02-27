import React from "react";
import Link from "next/link";

import MiniTable from "./components/MiniTable";
import Footer from "@/components/Footer";
import ConfirmationModal from "./components/ConfirmationModal";

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

export default function Home({ params }: { params: { id: string } }) {
  const entregaSelecionada = fakeData.find(
    (entrega) => entrega.id === parseInt(params.id)
  );

  if (!entregaSelecionada) {
    return (
      <div className="mt-10 flex flex-col bg-background text-slate-gray">
        <span className="text-center text-3xl font-medium">
          Verificar entrega
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          Entrega não encontrada.
        </span>
        <Footer />
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col bg-background text-slate-gray px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      <span className="text-center text-3xl font-medium">
        Verificar entrega
      </span>
      <span className="mt-2 text-center text-sm font-medium">
        Confira os dados abaixo:
      </span>
      <div className="mt-5 bg-white h-fit w-full rounded-xl">
        <MiniTable entrega={entregaSelecionada} />
      </div>
      <div className="fixed bottom-0 left-4 right-4 mb-[85px] grid grid-cols-2 gap-3">
        <Link href={`/entregas/${entregaSelecionada.id}/justificativa`}>
          <button className="h-11 bg-[#FF7070] w-full rounded-md font-inter font-semibold text-white ">
            Rejeitar
          </button>
        </Link>
        <ConfirmationModal
          openButton={
            <button className="h-11 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
              Aprovar
            </button>
          }
          link={`/entregas/${entregaSelecionada.id}/aprovar`}
        />
      </div>
      <Footer />
    </div>
  );
}
