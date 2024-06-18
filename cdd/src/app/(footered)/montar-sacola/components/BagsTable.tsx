"use client";
import { Table } from "@shared/components/NewTable";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const sacolas = [
  {
    id: 205004,
    nome: "Tyler Herro",
    situacao: "Montar",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 201704,
    nome: "Timóteo Stifft",
    situacao: "Montar",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 546711,
    nome: "Luís Suárez",
    situacao: "Montar",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 533711,
    nome: "Andressa Lima",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 987654,
    nome: "Cristiano Ronaldo",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "3kg - Batata Inglesa",
      "2un - Brócolis",
      "1kg - Abobrinha",
      "1un - Repolho",
      "500g - Tomate Gaúcho",
    ],
  },
  {
    id: 546951,
    nome: "Maria Souza",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 123456,
    nome: "Lionel Messi",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "1kg - Maçã Gala",
      "500g - Uva",
      "2un - Manga",
      "1un - Melancia",
      "1un - Pêra",
    ],
  },
  {
    id: 546733,
    nome: "Sérgio Ramos",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 555711,
    nome: "João Silva",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
  {
    id: 533712,
    nome: "Andressa Lima",
    situacao: "Pronta",
    prazo: "26/10/2023",
    conteudo: [
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
    ],
  },
];

export default function BagsTable() {
  const [itemsPerPage, setItemsPerPage] = useState(9); // Default value
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      const containerHeight = tableContainerRef.current.clientHeight;
      const tableHeadHeight =
        tableContainerRef.current.querySelector("thead").clientHeight;
      const tableRowHeight =
        tableContainerRef.current.querySelector("tbody tr").clientHeight;

      const calculatedItemsPerPage = Math.floor(
        (containerHeight - tableHeadHeight - tableRowHeight) / tableRowHeight
      );

      if (calculatedItemsPerPage < 1) {
        setItemsPerPage(1);
        return;
      }
      setItemsPerPage(calculatedItemsPerPage);
    };

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);

    return () => {
      window.removeEventListener("resize", calculateItemsPerPage);
    };
  }, []);

  const router = useRouter();

  const handleClick = (id: number) => {
    const n = id.toString();
    const path = `montar-sacola/${n}`;
    router.push(path);
  };

  return (
    <div
      ref={tableContainerRef}
      className="w-full h-[inherit] overflow-y-hidden"
    >
      <Table.Root
        data={sacolas}
        paginate={true}
        itemsPerPage={itemsPerPage}
        className="h-[inherit] overflow-y-auto"
      >
        {(currentItems) => (
          <>
            <Table.Head>
              <Table.Row className="min-h-0 h-7">
                <Table.HeaderCell className="col-span-5">
                  Pedido
                </Table.HeaderCell>
                <Table.HeaderCell className="col-span-8">
                  Cliente
                </Table.HeaderCell>
                <Table.HeaderCell className="col-span-7">
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {currentItems.map((sacola, index) => (
                <Table.Row className="" key={index}>
                  <Table.Cell className="col-span-5">{sacola.id}</Table.Cell>
                  <Table.Cell className="justify-start col-span-8 pl-2.5">
                    {sacola.nome}
                  </Table.Cell>
                  <Table.Cell className="col-span-7 w-full flex justify-center items-center p-0">
                    <button
                      onClick={() => handleClick(sacola.id)}
                      className={`rounded-full px-3 py-2 font-semibold w-20 h-[2.1875rem] flex justify-center items-center
                              ${
                                sacola.situacao.toLowerCase() === "montar"
                                  ? "bg-walnut-brown text-white"
                                  : ""
                              }
                              ${
                                sacola.situacao.toLowerCase() === "pronta"
                                  ? "bg-theme-secondary text-walnut-brown"
                                  : ""
                              }
                            `}
                    >
                      <span className="text-sm">{sacola.situacao}</span>
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </>
        )}
      </Table.Root>
    </div>
  );
}
