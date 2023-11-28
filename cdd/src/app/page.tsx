import { DeliveriesMenu } from "./home/components/DeliveriesMenu";
import { FillBagMenu } from "./home/components/FillBagMenu";
import { SendBagMenu } from "./home/components/SendBagMenu";

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
