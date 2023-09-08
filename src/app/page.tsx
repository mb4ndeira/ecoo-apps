"use client";
import { AccountSummary } from "./components/AccountSummary";
import { DailySales } from "./components/DailySales";
import { LastMonthsBilling } from "./components/LastMonthsBilling";

export default function Home() {
  return (
    <main className="bg-ghost-white-100 h-screen w-screen flex flex-col items-center">
      <h1 className="text-center w-128 h-40 shrink-0 text-slate-blue text-4xl font-poppins font-semibold">
        Painel de controle do produtor familiar
      </h1>

      <AccountSummary />
      <LastMonthsBilling />
      <DailySales />
    </main>
  );
}
