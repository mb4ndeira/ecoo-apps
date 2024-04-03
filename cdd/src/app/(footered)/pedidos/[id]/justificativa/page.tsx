import Button from "@shared/components/Button";
import Dropdown from "@shared/components/Dropdown";
import Footer from "@shared/components/Footer";
import RejectModal from "./components/RejectModal";

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

const justifications = [
  { id: 1, name: "Falta de produtos", unavailable: false },
  { id: 2, name: "Produtos errados", unavailable: false },
  { id: 3, name: "Baixa qualidade", unavailable: false },
  { id: 4, name: "Produtos vencidos", unavailable: false },
  { id: 5, name: "Quantidade errada", unavailable: false },
  { id: 6, name: "Armazenamento incorreto", unavailable: false },
  { id: 7, name: "Pragas / doenças", unavailable: false },
];

export default function Home({ params }: { params: { id: string } }) {
  const entregaSelecionada = fakeData.find(
    (entrega) => entrega.id === parseInt(params.id)
  );
  return (
    <div className="flex flex-col bg-background px-5 pt-16 justify-start h-full">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Selecione uma <br /> justificativa
      </span>
      <span className="mt-2 text-center text-sm font-medium text-slate-gray">
        Selecione uma justificativa <br /> para rejeitar a entrega
      </span>
      <div className="h-full w-full flex flex-col justify-between gap-y-4">
        <div className="mt-5 h-3/5 ">
          <label className="font-inter text-sm text-primary">
            Justificativa
            <Dropdown data={justifications} />
          </label>
        </div>
        <div className="h-[16%] flex left-4 right-4 items-end">
          <RejectModal
            openButton={
              <Button
                title={"Rejeitar"}
                className="font-inter bg-[#FF7070] h-[44px] text-white "
              />
            }
            link={`/pedidos/${entregaSelecionada?.id}/justificativa/rejeitar`}
          />
        </div>
        {/* <div className="h-[9%] flex flex-col justify-end">
        <Footer />
      </div> */}
      </div>
    </div>
  );
}
