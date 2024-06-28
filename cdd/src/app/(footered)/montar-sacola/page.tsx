import BagsTable from "./components/BagsTable";

export default function Home() {
  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col justify-end items-center h-[8.1rem] pb-0 w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Montar sacolas
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Monte as sacolas abaixo
        </span>
      </div>
      <div className="h-[calc(var(--min-page-height)-8.1rem)] w-full">
        <BagsTable />
      </div>
    </div>
  );
}
