import { HiOutlineInformationCircle } from "react-icons/hi";

export function AccountBalance() {
  return (
    <div className="mt-2 w-full h-44 pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around">
      <div className="flex justify-between items-start px-2 mt-[20px]">
        <div className="flex flex-col gap-0.5">
          <span font-inter>Saldo em conta</span>
          <span className="text-3xl font-inter font-bold tracking-tighter text-[#00735E]">
            R$ 1.893,44
          </span>
        </div>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <button className="w-full bg-[#3E5155] rounded-md h-12 mb-[21px] text-white font-bold font-poppins">
        Sacar dinheiro
      </button>
    </div>
  );
}
