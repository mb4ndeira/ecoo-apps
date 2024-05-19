"use client";

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
    endereco: "Rua Julho Hauser, 502",
    descricao: "Descrição do produto 1",
    valorTotal: "$100.00",
  },
  {
    nome: "Produto 2",
    endereco: "Rua Julho Hauser, 502",
    descricao: "Descrição do produto 2",
    valorTotal: "$150.00",
  },
  {
    nome: "Produto 3",
    endereco: "Rua Julho Hauser, 502",
    descricao: "Descrição do produto 3",
    valorTotal: "$200.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua Julho Hauser, 502",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
  {
    nome: "Produto 4",
    endereco: "Rua D, 1011",
    descricao: "Descrição do produto 4",
    valorTotal: "$120.00",
  },
];

export default function Table() {
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
    <div className="flex flex-col">
      <table className="w-full h-[100%] mt-5 bg-white rounded-lg leading-7 text-theme-primarytext-inter table-fixed">
        <thead>
          <tr className="flex justify-between border-b">
            <th className="p-3 font-normal truncate w-1/2">Endereço</th>
            <th className="p-3 font-normal truncate w-1/2">Descrição</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {paginarDados().map((item: Dados, index: number) => (
            <tr key={index} className="flex border-b">
              <td className="p-3 font-normal truncate w-1/2">
                {item.endereco}
              </td>
              <td className="p-3 font-normal truncate w-1/2">
                {item.descricao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-5 mb-5">
        {Array.from({ length: numPaginas }, (_, index) => (
          <button
            key={index}
            onClick={() => trocarPagina(index)}
            className={`mx-3 ${
              paginaAtual === index
                ? "text-theme-primary font-bold"
                : "text-theme-primary"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
