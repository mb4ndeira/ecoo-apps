'use client'

import Link from "next/link";
import { DeliveriesMenu } from "./home/components/DeliveriesMenu";
import { FillBagMenu } from "./home/components/FillBagMenu";
import { SendBagMenu } from "./home/components/SendBagMenu";
import { redirect } from "next/navigation";

export default function cdd() {
  const session = sessionStorage.getItem("isLogged")

  if(!session){
    redirect('/login')
  }

  return (
    <div className="px-8 pb-10 pt-10">
      <header className="flex mb-4 mx-4">
        <span className="text-lg text-slate-gray">
          Olá, <strong className="font-semibold">Eduardo!</strong>
        </span>
        <Link className="ml-auto" href={"/inicio"}>
          <button className=" text-lg text-primary">Sair</button>
        </Link>
      </header>
      <div className="">
        <DeliveriesMenu />
        <FillBagMenu />
        <SendBagMenu />
      </div>
    </div>
  );
}
