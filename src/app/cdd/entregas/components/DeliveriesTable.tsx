"use client";
import Table from "@/components/Table";

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

export default function DeliveriesTable() {
  return (
    <div>
      <Table
        columns={[
          { key: "id", label: "ID da Venda" },
          { key: "nome", label: "Nome" },
          { key: "situacao", label: "Situação" },
        ]}
        compactTable={true}
        paginate={true}
        data={fakeData}
        showHeader={false}
        pathName="entregas/verificarentrega?id="
      />
    </div>
  );
}
