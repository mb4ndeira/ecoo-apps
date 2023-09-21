import { AccountSummary } from "@/components/Home/AccountSummary";
import { DailySales } from "@/components/Home/DailySales";
import Footer from "@/components/Home/Footer";
import { LastMonthsBilling } from "@/components/Home/LastMonthsBilling";
import LastSalesTable from "@/components/Home/LastSalesTable";

export default function Home() {
  return (
    <div className="w-full h-screen pl-20 pr-2 lg:pr-10 xl:pr-20 2xl:pr-40 pt-20 flex gap-6 bg-background">
      <div className="flex flex-col w-full overflow-x-auto bg-red-500 gap-32">
        <span className="text-slate-blue text-3xl  font-poppins font-semibold">
          Painel de controle do <br />
          produtor familiar
        </span>

        <LastSalesTable />
      </div>
      <aside className="flex flex-col shrink-0 bg-red-500 w-80">
        <AccountSummary />
        <LastMonthsBilling />
        <DailySales />
      </aside>
      <Footer />
    </div>
  );
}
