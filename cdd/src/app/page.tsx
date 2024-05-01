"use client";
import Link from "next/link";

import { DeliveriesMenu } from "./home/components/DeliveriesMenu";
import { FillBagMenu } from "./home/components/FillBagMenu";
import { SendBagMenu } from "./home/components/SendBagMenu";
import DeliveriesExtract from "./home/components/DeliveriesExtract";
import { useEffect, useState } from "react";
import { getProfile } from "./_actions/get-profile";

interface Profile{
  id: string
  name: string
  email: string
}

export default function cdd() {
  const [profile, setProfile] = useState<Profile | null>()

  useEffect(() => {
    (async () => {
      setProfile(await getProfile())
    })()
  }, [])

  return (
    <div className="px-4 pb-10 pt-10">
      <header className="flex mb-4 mx-4">
        <span className="text-lg text-slate-gray">
          Olá, <strong className="font-semibold">{profile?.name}</strong>
        </span>
        <Link className="ml-auto" href={"/api/auth/logout"}>
          <button className=" text-lg text-primary">Sair</button>
        </Link>
      </header>
      <div className="">
        <DeliveriesMenu />
        {/* <FillBagMenu /> */}
        {/* <SendBagMenu /> */}
        <DeliveriesExtract />
      </div>
    </div>
  );
}
