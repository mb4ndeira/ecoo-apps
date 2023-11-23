import { HiOutlineInformationCircle } from "react-icons/hi";

export function AccountBalance() {
  return (
    <div className="w-full h-fit pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around">
      <div className="flex justify-between items-start  mt-[20px]">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#3E5155] text-[16px]">Saldo em conta</span>
          <span className="text-3xl font-inter font-bold tracking-tighter text-[#00735E] mb-[13px]">
            R$ 1.893,44
          </span>
        </div>
        <button className="ml-auto">
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <button className="w-full bg-[#3E5155] rounded-md h-12 mb-[21px] text-white font-semibold">
        Sacar dinheiro
      </button>
    </div>
  );
}
