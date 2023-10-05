"use client"

import { AccountSummary } from "@/components/Home/AccountSummary";
import { DailySales } from "@/components/Home/DailySales";
import Footer from "@/components/Home/Footer";
import { LastMonthsBilling } from "@/components/Home/LastMonthsBilling";
import LastSalesTable from "@/components/Home/LastSalesTable";
import logo from "@/assets/logo/dark.svg";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={`sm:ml-20 desktop:ml-0 w-full h-full mobile:h-fit bg-background`}>
      <div className="flex flex-col w-full max-w-[1140px] h-full px-[72px] md-mobile:px-0 py-20 mx-auto justify-between mobile:gap-10">
        <div className="flex flex-row mobile:flex-col-reverse w-full gap-14 mobile:items-center">
          <div className="flex flex-col w-full mobile:items-center sm-mobile: mobile:max-w-fit mobile:mx-auto h-full mobile:-mt-10 overflow-auto ">
            <span className="text-slate-blue text-[40px] xs-table:text-[30px] mobile:hidden font-semibold">
              Painel de controle do <br />
              produtor familiar
            </span>
            <LastSalesTable />
            <div className="hidden mobile:block">
              <LastMonthsBilling />
              <DailySales />
            </div>
          </div>
          <aside className="w-full flex-col">
            <div className="hidden mb-10 mobileTeste:flex ml-auto mr-8 justify-between w-full mobileTest:items-center h-full p-2">
              <Sidebar />
              <Image
                src={logo}
                width={150}
                height={60}
                alt="e-COO"
                className=""
              />
            </div>
            <AccountSummary />
            <div className="mobile:hidden">
              <LastMonthsBilling />
              <DailySales />
            </div>
          </aside>
        </div>
        <Footer />
      </div>
    </main>
  );
}
