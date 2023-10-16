import { HiOutlineInformationCircle } from "react-icons/hi";

export function ProductMenu() {
  return (
    <div className="mt-5 w-full h-64 pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="flex justify-between items-start mt-[23px]">
        <span className="text-[#3E5155]">
          Ofereça os seus produtos clicando no botão abaixo
        </span>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <div className="">
        <button className="w-full bg-[#3E5155] rounded-md h-12 mb-[12px] text-white font-bold">
          Vender um produto
        </button>
        <button className="w-full bg-transparent rounded-md h-12 mb-[20px] text-[#3E5155] border-2 border-[#3E5155] font-bold">
          Ver os meus produtos
        </button>
      </div>
    </div>
  );
}
