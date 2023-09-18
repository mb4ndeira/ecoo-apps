import { AccountSummary } from "@/components/Home/AccountSummary";
import { DailySales } from "@/components/Home/DailySales";
import Footer from "@/components/Home/Footer";
import { LastMonthsBilling } from "@/components/Home/LastMonthsBilling";
import LastSalesTable from "@/components/Home/LastSalesTable";

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
