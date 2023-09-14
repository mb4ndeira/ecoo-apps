import { AccountSummary } from "./components/AccountSummary";
import { DailySales } from "./components/DailySales";
import Footer from "./components/Footer";
import { LastMonthsBilling } from "./components/LastMonthsBilling";
import LastSalesTable from "./components/LastSalesTable";

export default function Home() {
  return (
    <main className="bg-ghost-white-100 text-table w-screen flex flex-col items-center md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4">
      <div className="md:mx-auto lg:ml-28 justify-center">
        <span className="w-128 h-40 text-slate-blue text-4xl font-poppins font-semibold hidden md:block">
          Painel de controle do <br /> produtor familiar
        </span>
      </div>
      <AccountSummary />
      <LastSalesTable />
      <LastMonthsBilling />
      <DailySales />
      <Footer />
    </main>
  );
}
