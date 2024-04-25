import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

import Button from "@shared/components/Button";

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
];

export default function Home({ params }: { params: { id: string } }) {
  const sacolaSelecionada = sacolas.find(
    (sacola) => sacola.id === parseInt(params.id)
  );
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-background text-slate-gray p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="">
          <IoCheckmarkCircle className="text-[100px] text-[#00735E]" />
        </div>

        <span className="text-center text-3xl font-medium">
          A sacola está <br /> pronta!
        </span>
        <span className="mt-5 text-center text-sm font-medium">
          A sacola #{sacolaSelecionada?.id} do cliente <br />{" "}
          {sacolaSelecionada?.nome} está pronta.
        </span>
      </div>
      <div className="mt-10 mb-6 w-full">
        <Link href={"/"} className="w-full">
          <Button
            className="w-full bg-[#F7F7F7] rounded-md h-12 mb-[12px] text-[#3E5155] border-2 border-[#3E5155] font-semibold"
            href={"/"}
          >
            Voltar para a tela inicial
          </Button>
        </Link>
        <Link href={"/montar-sacola"} className="w-full">
          <Button
            className="w-full bg-[#3E5155] rounded-md h-12 text-white font-semibold"
            href={"/montar-sacola"}
          >
            Enviar sacola agora
          </Button>
        </Link>
      </div>
      {/* <div className="w-full flex justify-end">
        <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
      </div> */}
    </div>
  );
}
