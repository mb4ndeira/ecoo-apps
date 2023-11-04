import { DeliveriesMenu } from "@/components/cdd/DeliveriesMenu";
import { FillBagMenu } from "@/components/cdd/FillBagMenu";
import { SendBagMenu } from "@/components/cdd/SendBagMenu";

export default function cdd() {
  return (
    <div>
      <header className="flex mb-4">
        <span className="text-#2F4A4D">
          Olá, <strong>Eduardo!</strong>
        </span>
        <button className="ml-auto text-primary">Sair</button>
      </header>
      <div>
        <DeliveriesMenu />
        <FillBagMenu />
        <SendBagMenu />
      </div>
    </div>
  );
}
