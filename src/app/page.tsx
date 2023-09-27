import { AccountSummary } from "@/components/Home/AccountSummary";
import { DailySales } from "@/components/Home/DailySales";
import Footer from "@/components/Home/Footer";
import { LastMonthsBilling } from "@/components/Home/LastMonthsBilling";
import LastSalesTable from "@/components/Home/LastSalesTable";
import logo from "@/assets/logo/dark.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-background">
      <div className="flex flex-col w-full max-w-[1140px] h-full px-[72px] py-20 mx-auto justify-between">
        <div className="flex flex-row w-full gap-14">
          <div className="flex flex-col w-full h-full">
            <span className="text-slate-blue text-[40px] 2xs-table:text-xl mobile:hidden font-semibold">
              Painel de controle do <br />
              produtor familiar
            </span>
            <LastSalesTable />
          </div>
          <aside className="flex flex-col w-80">
            <AccountSummary />
            <LastMonthsBilling />
            <DailySales />
          </aside>
        </div>
        <Footer />
      </div>
    </main>
  );
}
