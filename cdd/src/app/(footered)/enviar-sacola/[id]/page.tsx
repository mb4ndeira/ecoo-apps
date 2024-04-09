import Footer from "@shared/components/Footer";
import SendBagMiniTable from "./components/SendBagMiniTable";
import Button from "@shared/components/Button";
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
      <div className="flex flex-col h-1/5 justify-center">
        <span className="text-center text-3xl font-medium">
          Conteúdo da sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium">
          Monte a sacola abaixo e, após concluir, <br /> marque como pronta
        </span>
      </div>
      <div className="mt-5 h-3/5 w-full rounded-xl">
        <SendBagMiniTable sacola={sacolaSelecionada} />
      </div>
      <div className="w-full flex flex-col justify-end h-[10%]">
        {sacolaSelecionada.situacao == "Enviar" ? (
          <ApproveBagModal
            openButton={
              <Button
                title="Marcar como enviada"
                className="bg-[#00735E] rounded-md font-inter font-semibold text-white h-11"
              />
            }
            link={`/enviar-sacola/${sacolaSelecionada.id}/sacolaenviada`}
          />
        ) : (
          <RejectBagModal
            openButton={
              <Button
                title="Alterar para pendente"
                className="bg-[#FF7070] rounded-md font-inter font-semibold text-white h-11"
              />
            }
            link={`/enviar-sacola/${sacolaSelecionada.id}/alterar`}
          />
        )}
      </div>
      {/* <div className="h-[10%] flex items-end">
        <Footer />  
      </div> */}
    </div>
  );
}
