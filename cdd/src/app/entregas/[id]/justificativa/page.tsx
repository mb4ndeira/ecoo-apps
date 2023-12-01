import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";

const justifications = [
  { id: 1, name: "Falta de produtos", unavailable: false },
  { id: 2, name: "Produtos errados", unavailable: false },
  { id: 3, name: "Baixa qualidade", unavailable: false },
  { id: 4, name: "Produtos vencidos", unavailable: false },
  { id: 5, name: "Quantidade errada", unavailable: false },
  { id: 6, name: "Armazenamento incorreto", unavailable: false },
  { id: 7, name: "Pragas / doenças", unavailable: false },
];

export default function Home() {
  return (
    <div className="mt-10 flex flex-col bg-background text-slate-gray px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20 ">
      <span className="text-center text-3xl font-medium">
        Selecione uma justificativa
      </span>
      <span className="mt-2 text-center text-sm font-medium">
        Selecione uma justificativa para rejeitar a entrega
      </span>
      <label className="mt-3 font-inter text-sm text-primary">
        Justificativa
        <Dropdown data={justifications} />
      </label>
      <div className="flex fixed bottom-0 left-4 right-4 mb-[85px]">
        <Button
          title={"Rejeitar"}
          className="font-inter py-0 bg-[#FF7070] h-[44px] text-white mt-5 "
        />
      </div>
      <Footer backButton={true} />
    </div>
  );
}
