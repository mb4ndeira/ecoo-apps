import { AccountSummary } from "./components/AccountSummary";
import { DailySales } from "./components/DailySales";
import Footer from "./components/Footer";
import { LastMonthsBilling } from "./components/LastMonthsBilling";
import LastSalesTable from "./components/LastSalesTable";

export default function Home() {
  return (
    <div className="w-full h-screen px-20 pt-20 flex gap-6 bg-background">
      <div className="flex flex-col w-full">
        <span className="text-slate-blue text-[40px] font-poppins font-semibold">
          Painel de controle do produtor familiar
        </span>

        <LastSalesTable />
      </div>
      <aside className="flex flex-col">
        <AccountSummary />
        <LastMonthsBilling />
        <DailySales />
      </aside>
      <Footer />
    </div>
  );
}
