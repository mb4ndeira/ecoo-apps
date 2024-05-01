import Footer from "@shared/components/Footer";
import Table from "./components/Table";
import ConfirmationModal from "./components/ConfirmationModal";

export default function ExtratoEntregas() {
  return (
    <div className="flex flex-col bg-background px-5 pt-16 justify-start">
      <span className="text-center text-3xl font-medium text-slate-gray">
        Extrato <br /> de entregas
      </span>
      <span className="mt-2 text-center text-sm font-medium text-slate-gray">
        Imprima o extrato <br /> de entregas para o motoboy
      </span>
      <Table />
      <button className="px-2 py-3 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
        Imprimir extrato
      </button>
    </div>
  );
}
