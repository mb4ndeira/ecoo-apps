import { AccountBalance } from "@/components/producer/AccountBalance";
import { PendingDeliveries } from "@/components/producer/PendingDeliveries";
import { ProductMenu } from "@/components/producer/ProductMenu";

export default function Home() {
  return (
    <div className="bg-background">
      <header className="flex mb-4">
        <span className="text-#2F4A4D">
          Olá, <strong>Eduardo!</strong>
        </span>
        <button className="ml-auto text-primary">Sair</button>
      </header>
      <AccountBalance />
      <ProductMenu />
      <PendingDeliveries />
      <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
        ?
      </button>
    </div>
  );
}
