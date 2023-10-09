import { HiOutlineInformationCircle, HiPlus } from "react-icons/hi";
import { Button } from "react-aria-components";

function SalesButton({ resizing }: { resizing: boolean }) {
  return (
    <Button
      className="flex items-center justify-center gap-2.5 w-full h-12 py-3 px-4 pr-5 rounded-lg bg-rain-forest"
      aria-describedby="sales-Buttonbutton-text"
    >
      <div
        className={
          resizing
            ? "hidden"
            : "hidden min-[462px]:block md:hidden min-[1030px]:block"
        }
      >
        <p
          className="text-base font-inter text-white font-semibold"
          id="sales-button-text"
        >
          Minhas vendas
        </p>
      </div>
      <div
        className={
          resizing ? "block" : "min-[462px]:hidden md:block min-[1030px]:hidden"
        }
      >
        <p className="text-base font-inter text-white font-semibold">Vendas</p>
      </div>
      <HiPlus className="text-xl text-white" />
    </Button>
  );
}

export function AccountSummary({ resizing }: { resizing: boolean }) {
  return (
    <div className="w-full md:max-w-[328px] lg:max-w-full">
      <h2 className="text-base font-semibold pl-2.5 pb-2.5">
        Vendas nesse mês
      </h2>
      <div className="w-full h-40 pl-3 pr-4 pt-5 pb-4 rounded-3xl bg-white">
        <div className="flex justify-between items-start px-2">
          <div className="flex flex-col gap-0.5">
            <p
              className="text-3xl font-inter font-bold tracking-tighter text-rain-forest"
              aria-label="R$ 1.893,44. Total de vendas desse mês (em reais)."
            >
              R$ 1.893,44
            </p>
            <p
              className="text-base font-inter text-slate-gray"
              aria-label="R$ 4,44. Taxas sobre total de vendas desse mês (em reais)."
            >
              Taxas: R$ 4,44
            </p>
          </div>
          <span
            className="-translate-y-0.5"
            aria-label="Informações sobre taxas da plataforma."
            tabIndex={0}
          >
            <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
          </span>
        </div>
        <div className="flex justify-end gap-1.5 w-full pt-4">
          <Button
            className="flex items-center justify-center gap-2.5 w-full h-12 py-3 px-4 rounded-lg bg-ghost-white-100"
            aria-describedby="draw-button-text"
          >
            <p
              className="font-inter text-rain-forest font-semibold"
              id="draw-button-text"
            >
              Sacar
            </p>
          </Button>
          <SalesButton resizing={resizing} />
        </div>
      </div>
    </div>
  );
}
