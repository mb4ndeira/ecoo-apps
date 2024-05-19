import React from "react";
import Link from "next/link";

import MiniTable from "./components/MiniTable";
import ConfirmationModal from "./components/ConfirmationModal";
import { useParams } from "next/navigation";

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
  const params = useParams();
  const { id } = params;

  const entregaSelecionada = fakeData.find(
    (entrega) => entrega.id === parseInt(id as string)
  );

  return (
    <div className="flex flex-col bg-theme-background px-5 pt-16 justify-start h-full">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Verificar entrega
      </span>
      {!entregaSelecionada ? (
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Entrega não encontrada.
        </span>
      ) : (
        <>
          <span className="mt-2 text-center text-sm font-medium text-slate-gray">
            Confira os dados abaixo:
          </span>
          <div className="h-full w-full flex flex-col justify-between gap-y-4">
            <div className="mt-5 w-full rounded-xl">
              <MiniTable entrega={entregaSelecionada} />
            </div>

            <div className="h-[25%] flex flex-col justify-end">
              <div className="w-full left-4 right-4 mb-6 grid grid-cols-2 gap-3 self-end">
                <Link href={`/pedidos/${entregaSelecionada.id}/justificativa`}>
                  <button className="px-2 py-3 bg-[#FF7070] w-full rounded-md font-inter font-semibold text-white ">
                    Rejeitar
                  </button>
                </Link>
                <ConfirmationModal
                  openButton={
                    <button className="px-2 py-3 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
                      Aprovar
                    </button>
                  }
                  link={`/pedidos/${entregaSelecionada.id}/aprovar`}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // return (
  //   <div className="flex flex-col bg-theme-background px-5 pt-16 justify-start h-full">
  //     <span className="text-center text-3xl font-medium text-slate-gray">
  //       Verificar entrega
  //     </span>
  //     {!entregaSelecionada ? (
  //       <span className="mt-2 text-center text-sm font-medium text-slate-gray">
  //         Entrega não encontrada.
  //       </span>
  //     ) : (
  //       <>
  //         <span className="mt-2 text-center text-sm font-medium text-slate-gray">
  //           Confira os dados abaixo:
  //         </span>
  //         <div className="h-full w-full flex flex-col justify-between gap-y-4">
  //           <div className="mt-5 w-full rounded-xl">
  //             <MiniTable entrega={entregaSelecionada} />
  //           </div>

  //           <div className="h-[25%] flex flex-col justify-end">
  //             <div className="w-full left-4 right-4 mb-6 grid grid-cols-2 gap-3 self-end">
  //               <Link href={/pedidos/${entregaSelecionada.id}/justificativa}>
  //                 <button className="px-2 py-3 bg-[#FF7070] w-full rounded-md font-inter font-semibold text-white ">
  //                   Rejeitar
  //                 </button>
  //               </Link>
  //               <ConfirmationModal
  //                 openButton={
  //                   <button className="px-2 py-3 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
  //                     Aprovar
  //                   </button>
  //                 }
  //                 link={/pedidos/${entregaSelecionada.id}/aprovar}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );
}
