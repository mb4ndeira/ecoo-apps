import Footer from "@shared/components/Footer";
import BagMiniTable from "./components/BagMiniTable";
import Button from "@shared/components/Button";
import ApproveBagModal from "../../enviar-sacola/[id]/components/ApproveBagModal";
import RejectBagModal from "../../enviar-sacola/[id]/components/RejectBagModal";

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

  if (!sacolaSelecionada) {
    return (
      <div className="mt-10 flex flex-col bg-background text-slate-gray">
        <span className="text-center text-3xl font-medium">
          Conteúdo da sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          Sacola não encontrada
        </span>
        <Footer />
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col bg-background text-slate-gray p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20">
      <div className="flex flex-col h-[15%] justify-end">
        <span className="text-center text-3xl font-medium">
          Conteúdo da sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          Monte a sacola abaixo e, após concluir, < br/> marque como pronta
        </span>
      </div>
      <div className="mt-5 h-3/5 w-full rounded-xl">
        <BagMiniTable sacola={sacolaSelecionada} />
      </div>
      <div className="h-[25%] flex flex-col justify-end">
        {sacolaSelecionada.situacao == "Montar" ? (
          <div className="left-4 right-4 mb-6">
            <ApproveBagModal
              openButton={
                <Button
                  title="Marcar como pronta"
                  className="bg-[#00735E] rounded-md font-inter font-semibold text-white h-11"
                />
              }
              link={`/montar-sacola/${sacolaSelecionada.id}/aprovar`}
            />
          </div>
        ) : (
          <div className="left-4 right-4 mb-6">
            <RejectBagModal
              openButton={
                <Button
                  title="Alterar para pendente"
                  className="bg-[#FF7070] rounded-md font-inter font-semibold text-white h-11"
                />
              }
              link={`/montar-sacola/${sacolaSelecionada.id}/alterar`}
            />
          </div>
        )}
       <Footer />
      </div>
    </div>
  );
}
