import Footer from "@shared/components/Footer";
import Table from "./components/Table";
import ConfirmationModal from "./components/ConfirmationModal";

export default function ExtratoEntregas(){
  return(
    <div className="w-full h-screen flex flex-col justify-center p-4">
      <div className="w-full flex flex-col items-center justify-center h-[20%]">
        <span className="text-3xl text-slate-gray font-medium text-center">Extrato < br /> de entregas</span>
        <span className="text-center mt-5 text-slate-gray">Imprima o extrato < br /> de entregas para o motoboy</span>
      </div>
      <div className="mt-5 h-[65%] flex">
        <Table />
      </div>
      <div className="h-[20%] flex flex-col justify-end">
        <div className="mb-6">
          <button className="px-2 py-3 bg-[#00735E] w-full rounded-md font-inter font-semibold text-white">
            Imprimir extrato
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}