import SendBagMiniTable from "./components/SendBagMiniTable";
import OldButton from "@shared/components/OldButton";
import ApproveBagModal from "./components/ApproveBagModal";
import RejectBagModal from "./components/RejectBagModal";

const sacolas = [
  {
    id: 533711,
    nome: "Andressa Lima",
    situacao: "Enviar",
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
    situacao: "Enviar",
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
    situacao: "Enviada",
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
    situacao: "Enviada",
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
    situacao: "Enviada",
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
    situacao: "Enviada",
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
    <div className="flex flex-col bg-background px-5 pt-16 justify-start h-full">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Conteúdo da sacola
      </span>
      {!sacolaSelecionada ? (
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Sacola não encontrada
        </span>
      ) : (
        <>
          <span className="mt-2 text-center text-sm font-medium text-slate-gray">
            Monte a sacola abaixo e, após concluir, <br /> marque como pronta
          </span>
          <div className="h-full w-full flex flex-col justify-between gap-y-4">
            <div className="mt-5 w-full rounded-xl">
              <SendBagMiniTable sacola={sacolaSelecionada} />
            </div>
            <div className="w-full flex flex-col justify-end">
              {sacolaSelecionada.situacao == "Enviar" ? (
                <ApproveBagModal
                  openButton={
                    <OldButton
                      title="Marcar como enviada"
                      className="bg-[#00735E] rounded-md font-inter font-semibold text-white h-11"
                    />
                  }
                  link={`/enviar-sacola/${sacolaSelecionada.id}/sacolaenviada`}
                />
              ) : (
                <RejectBagModal
                  openButton={
                    <OldButton
                      title="Alterar para pendente"
                      className="bg-[#FF7070] rounded-md font-inter font-semibold text-white h-11"
                    />
                  }
                  link={`/enviar-sacola/${sacolaSelecionada.id}/alterar`}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
