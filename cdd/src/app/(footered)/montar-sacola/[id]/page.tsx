import BagMiniTable from "./components/BagMiniTable";
import OldButton from "@shared/components/OldButton";
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
      "2kg - Cebola Roxa",
      "1un - Alface crespa",
      "500g - Pimentão vermelho",
      "800g - Cenoura",
      "1un - Couve",
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

  const situacao = sacolaSelecionada?.situacao;

  const situacaoContent = {
    subtitle:
      situacao == "Montar"
        ? "Monte a sacola abaixo e, após concluir, marque como pronta"
        : "A sacola não está pronta? Clique no botão abaixo e altere seu status para pendente",
    buttonTitle:
      situacao == "Montar" ? "Marcar como pronta" : "Alterar para pendente",
    buttonColor: situacao == "Montar" ? "#00735E" : "#FF7070",
    modalLink:
      situacao == "Montar"
        ? `/montar-sacola/${sacolaSelecionada?.id}/aprovar`
        : `/montar-sacola/${sacolaSelecionada?.id}/alterar`,
    modalComponent: situacao == "Montar" ? ApproveBagModal : RejectBagModal,
  };

  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col pt-16 items-center h-[10.35rem] pb-4 w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Conteúdo da sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          {!sacolaSelecionada
            ? "Sacola não encontrada"
            : situacaoContent.subtitle}
        </span>
      </div>
      <div className="h-[calc(var(--min-page-height)-10.35rem)] w-full flex flex-col justify-between pb-6 gap-4">
        <BagMiniTable sacola={sacolaSelecionada} />
        <situacaoContent.modalComponent
          openButton={
            <OldButton
              title={situacaoContent.buttonTitle}
              className={`bg-[${situacaoContent.buttonColor}] rounded-lg font-inter font-semibold text-white h-11 flex justify-center items-center`}
            />
          }
          link={situacaoContent.modalLink}
        />
      </div>
    </div>
  );
}
