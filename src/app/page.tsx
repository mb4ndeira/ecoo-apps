import { AccountSummary } from "@/components/Home/AccountSummary";
import { DailySales } from "@/components/Home/DailySales";
import Footer from "@/components/Home/Footer";
import { LastMonthsBilling } from "@/components/Home/LastMonthsBilling";
import LastSalesTable from "@/components/Home/LastSalesTable";
import logo from "@/assets/logo/dark.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-fit mobile:h-fit pl-10 pr-10 lg:pl-20 xl:pr-20 2xl:pr-40 pt-20 flex  flex-row-reverse mobile:flex-col mobile:items-center gap-6 bg-background">
      <aside className="flex flex-col w-80 mobile:items-center">
        <div className="hidden  mb-10 mobile:flex ml-auto mr-8 flex-col">
          <Image src={logo} width={150} height={60} alt="e-COO" className="" />
        </div>
        <AccountSummary />
        <LastMonthsBilling />
        <DailySales />
      </aside>
      <div className="flex flex-col w-full mobile:w-auto overflow-y-visible overflow-x-auto mobile:overflow-x-visible mobile:gap-2 2xs-table:gap-[9.8rem] gap-[8.79rem]">
        <span className="text-slate-blue text-3xl 2xs-table:text-xl mobile:hidden font-semibold">
          Painel de controle do <br />
          produtor familiar
        </span>
        <LastSalesTable />
      </div>
      <Footer />
    </div>
  );
}
