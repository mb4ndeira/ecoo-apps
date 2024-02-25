"use client";
import { redirect } from "next/navigation";

import { AccountBalance } from "../home/components/AccountBalance";
import { Header } from "../home/components/Header";
import { PendingDeliveries } from "../home/components/PendingDeliveries";
import { ProductMenu } from "../home/components/ProductMenu";

export default function Home() {
  const session = sessionStorage.getItem("isLogged");

  if (!session) {
    redirect("/inicio");
  }

  const FourItems = 4;

  return (
    <div className="bg-background px-8 pb-10 pt-10">
      <div>
        <Header />
        <AccountBalance />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
      </div>
    </div>
  );
}
