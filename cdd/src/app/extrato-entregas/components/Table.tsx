'use client'

import { useState } from "react";

interface Dados {
  nome: string;
  endereco: string;
  descricao: string;
  valorTotal: string;
}

const dados = [
  {
    nome: "Produto 1",
    endereco: "Rua A, 123",
    descricao: "Descrição do produto 1",
    valorTotal: "$100.00"
  },
  {
    nome: "Produto 2",
    endereco: "Rua B, 456",
    descricao: "Descrição do produto 2",
    valorTotal: "$150.00"
  },
  {
    nome: "Produto 3",
    endereco: "Rua C, 789",
    descricao: "Descrição do produto 3",
    valorTotal: "$200.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00"
  }
];


export default function Table(){
  // return(
  //   <div className="overflow-x-auto">
  //     <table className="w-full bg-white rounded-lg leading-7 text-primary text-inter">
  //       <thead>
  //         <tr className="flex justify-between border-b">
  //           <th className="p-3 font-normal truncate w-1/4">Nome</th>
  //           <th className="p-3 font-normal truncate w-1/4">Endereço</th>
  //           <th className="p-3 font-normal truncate w-1/4">Descrição</th>
  //           <th className="p-3 font-normal truncate w-1/4">Valor Total</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {dados.map((item, index) => (
  //           <tr key={index} className="flex border-b">
  //             <td className="p-3 font-normal truncate w-1/4">{item.nome}</td>
  //             <td className="p-3 font-normal truncate w-1/4">{item.endereco}</td>
  //             <td className="p-3 font-normal truncate w-1/4">{item.descricao}</td>
  //             <td className="p-3 font-normal truncate w-1/4">{item.valorTotal}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>

  const [paginaAtual, setPaginaAtual] = useState<number>(0);
  const itensPorPagina: number = 6;
  const numPaginas: number = Math.ceil(dados.length / itensPorPagina);

  const paginarDados = (): Dados[] => {
    const startIndex: number = paginaAtual * itensPorPagina;
    const endIndex: number = startIndex + itensPorPagina;
    return dados.slice(startIndex, endIndex);
  };

  const trocarPagina = (indice: number): void => {
    setPaginaAtual(indice);
  };

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="w-full bg-white rounded-lg leading-7 text-primary text-inter">
        <thead>
          <tr className="flex justify-between border-b">
            <th className="p-3 font-normal truncate w-1/4">Nome</th>
            <th className="p-3 font-normal truncate w-1/4">Endereço</th>
            <th className="p-3 font-normal truncate w-1/4">Descrição</th>
            <th className="p-3 font-normal truncate w-1/4">Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {paginarDados().map((item: Dados, index: number) => (
            <tr key={index} className="flex border-b">
              <td className="p-3 font-normal truncate w-1/4">{item.nome}</td>
              <td className="p-3 font-normal truncate w-1/4">{item.endereco}</td>
              <td className="p-3 font-normal truncate w-1/4">{item.descricao}</td>
              <td className="p-3 font-normal truncate w-1/4">{item.valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: numPaginas }, (_, index) => (
          <button
            key={index}
            onClick={() => trocarPagina(index)}
            className={`mx-3 ${paginaAtual === index ? 'text-primary font-bold' : 'text-primary'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}