import { DeliveriesMenu } from "@/components/cdd/DeliveriesMenu";
import { FillBagMenu } from "@/components/cdd/FillBagMenu";
import { SendBagMenu } from "@/components/cdd/SendBagMenu";

export default function cdd() {
  return (
    <div>
      <header className="flex mb-4 mx-4">
        <span className="text-lg text-slate-gray">
          Olá, <strong className="font-semibold">Eduardo!</strong>
        </span>
        <button className="ml-auto text-lg text-primary">Sair</button>
      </header>
      <div>
        <DeliveriesMenu />
        <FillBagMenu />
        <SendBagMenu />
      </div>
    </div>
  );
}
