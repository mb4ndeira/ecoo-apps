import { HiOutlineInformationCircle } from "react-icons/hi";

export function AccountSummary() {
  return (
    <div className="">
      <h3 className="text-base font-poppins font-semibold ml-2 mb-2">
        Vendas nesse mês
      </h3>
      <div className="bg-white w-80 h-40 rounded-2xl">
        <div className="flex items-center">
          <h2 className="mt-6 ml-6 text-rain-forest text-3xl font-inter font-bold tracking-tighter">
            R$ 1.893,44
          </h2>
          <button className="ml-auto mr-5 mt-6 text-slate-blue text-2xl">
            <HiOutlineInformationCircle />
          </button>
        </div>
        <p className="ml-6 text-base text-slate-gray font-inter">
          Taxas: R$ 4,44
        </p>
        <div className="mt-4 ml-4 mb-4">
          <button className="w-4/12 h-12 py-3 px-4 justify-center items-center rounded-md font-inter bg-ghost-white-100 text-rain-forest font-semibold">
            Sacar
          </button>
          <button className="ml-1.5 w-7/12 h-12 py-3 px-4 justify-center items-center rounded-md font-inter bg-rain-forest text-white font-semibold">
            Concluir venda
          </button>
        </div>
      </div>
    </div>
  );
}
