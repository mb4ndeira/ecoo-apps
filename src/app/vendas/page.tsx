import Table from "@/components/Sales/Table";

export default function Vendas() {
  return (
    <main className="bg-background w-full h-full">
      <div className="w-full max-w-[1140px] h-full px-[72px] py-20 mx-auto">
        <span className="text-slate-blue text-[40px] xs-table:text-[30px] mobile:hidden font-semibold">
          Minhas vendas
        </span>
        <div className="mt-[52px] ">
          <Table />
        </div>
      </div>
    </main>
  );
}
