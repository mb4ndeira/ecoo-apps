import { HiOutlineInformationCircle, HiPlus } from "react-icons/hi";

export function AccountSummary() {
  return (
    <div className="">
      <h3 className="sm-mobile:text-sm text-base font-semibold ml-2 mb-2">
        Vendas nesse mês
      </h3>
      <div className="bg-white w-80 h-40 sm-mobile:w-64 sm-mobile:h-32 rounded-2xl">
        <div className="flex items-center">
          <h2 className="mt-6 ml-6 sm-mobile:mt-3 text-rain-forest text-3xl sm-mobile:text-2xl font-inter font-bold tracking-tighter">
            R$ 1.893,44
          </h2>
          <button className="ml-auto mr-5 mt-6 sm-mobile:mt-4 sm-mobile:mr-4 text-slate-blue text-2xl sm-mobile:text-xl">
            <HiOutlineInformationCircle />
          </button>
        </div>
        <p className="ml-6 sm-mobile:text-sm text-base text-slate-gray font-inter">
          Taxas: R$ 4,44
        </p>
        <div className="mt-3 ml-4 mb-4">
          <button className="w-4/12 h-12 sm-mobile:h-10 py-3 px-4 justify-center text-sm sm-mobile:text-xs items-center rounded-md font-inter bg-ghost-white-100 text-rain-forest font-semibold">
            Sacar
          </button>
          <button className="ml-1.5 w-7/12 h-12 sm-mobile:h-10 py-3 px-4 text-sm sm-mobile:text-xs items-center rounded-md font-inter bg-rain-forest text-white  font-semibold">
            <span className="flex items-center">
              Minhas vendas{" "}
              <HiPlus className="ml-auto text-xl sm-mobile:text-base font-bold" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
