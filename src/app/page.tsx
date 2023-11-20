"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { VisuallyHidden } from "@/components/VisuallyHidden";

// import { Footer } from "@/app/home/components/Footer";
// import { AccountSummary } from "@/app/home/components/AccountSummary";
// import { SalesChart } from "@/app/home/components/SalesChart";
// import { BillingChart } from "@/app/home/components/BillingChart";
// import SalesTable from "@/app/home/components/SalesTable";

import logo from "@/assets/logo/dark.svg";

const Title = () => {
  return (
    <div className="hidden md:block lg:h-40 lg:pt-8 lg:mb-10">
      <h1 className="hidden md:block text-3xl lg:text-[40px] lg:leading-[50px] text-slate-blue font-semibold">
        Painel de controle do
        <br />
        produtor familiar
      </h1>
      <VisuallyHidden>
        <h1 className="sm:hidden">Painel de controle do produtor familiar</h1>
      </VisuallyHidden>
    </div>
  );
};

let resizeTimeoutId: NodeJS.Timeout | null = null;

export default function Home() {
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResizing(true);
      console.log("resizing");

      if (resizeTimeoutId) clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(() => {
        setResizing(false);
        console.log("stopped");
      }, 250);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const SalesTableMount = <SalesTable />;
  const MonthlyProfitsMount = <BillingChart suspended={resizing} />;
  const SalesChartMount = <SalesChart suspended={resizing} />;
  const AccountSummaryMount = <AccountSummary resizing={resizing} />;

  const LinearLayout = () => (
    <div className="flex md:hidden flex-col gap-10">
      <div className="flex md:hidden justify-end self-end min-h-[60px] px-4">
        <Image src={logo} width={150} height={60} alt="e-COO logotipo" />
      </div>
      {AccountSummaryMount}
      {SalesTableMount}
      {MonthlyProfitsMount}
      {SalesChartMount}
    </div>
  );

  const SmallGridLayout = () => (
    <div className="hidden md:flex lg:hidden flex-col gap-10">
      <Title />
      <div className="flex gap-10">
        {SalesTableMount}
        <div className="flex flex-col gap-10">
          {AccountSummaryMount}
          {MonthlyProfitsMount}
        </div>
      </div>
      {SalesChartMount}
    </div>
  );

  const GridLayout = () => (
    <div className="hidden lg:grid gap-10">
      <div className="flex flex-col gap-10">
        <Title />
        {SalesTableMount}
      </div>
      <div className="col-start-2 flex flex-col gap-10">
        {AccountSummaryMount}
        {MonthlyProfitsMount}
        {SalesChartMount}
      </div>
    </div>
  );

  return (
      <main className="flex flex-col gap-10 w-full px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20 bg-background">
        <div className="w-full h-full max-w-6xl">
          <LinearLayout />
          <SmallGridLayout />
          <GridLayout />
        </div>
        <Footer />
      </main>
  );
}
