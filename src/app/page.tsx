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
        <div className="hidden  mb-10 mobile:flex items-center flex-col">
          <Image src={logo} width={200} height={80} alt="e-COO" className="" />
          <span className="text-xl text-rain-forest mt-4 leading-10 font-semibold text-center lg:text-4xl lg:text-start lg:leading-[50px]">
            A plataforma de gestão da <br />
            agricultura familiar
          </span>
        </div>
        <AccountSummary />
        <LastMonthsBilling />
        <DailySales />
      </aside>
      <div className="flex flex-col w-full overflow-y-visible overflow-x-auto  mobile:overflow-x-visible mobile:gap-2 gap-[8.79rem] mobile:items-center">
        <span className="text-slate-blue text-3xl mobile:hidden font-semibold">
          Painel de controle do <br />
          produtor familiar
        </span>

        <LastSalesTable />
      </div>
      <Footer />
    </div>
  );
}
