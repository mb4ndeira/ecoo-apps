import Link from "next/link";

import Button from "@shared/components/Button";

import { DeliveriesMenu } from "./home/components/DeliveriesMenu";
import { FillBagMenu } from "./home/components/FillBagMenu";
import { SendBagMenu } from "./home/components/SendBagMenu";
import { UserGreeting } from "./home/components/UserGreeting";
import DeliveriesExtract from "./home/components/DeliveriesExtract";

export default function Cdd() {
  return (
    <div className="px-4 pb-10 pt-10">
      <header className="flex mb-4 mx-4">
        <UserGreeting />
        <Link className="ml-auto" href={"/api/auth/logout"}>
          <Button
            className=" text-lg text-theme-primary"
            href={"/api/auth/logout"}
          >
            Sair
          </Button>
        </Link>
      </header>
      <div className="">
        <DeliveriesMenu />
        <FillBagMenu />
        <SendBagMenu />
        <DeliveriesExtract />
      </div>
    </div>
  );
}
