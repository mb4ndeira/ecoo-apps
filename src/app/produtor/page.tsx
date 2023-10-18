import { AccountBalance } from "@/components/producer/AccountBalance";
import { PendingDeliveries } from "@/components/producer/PendingDeliveries";
import { ProductMenu } from "@/components/producer/ProductMenu";

export default function Home() {
  const FourItems = 4;
  const EightItems = 8;

  return (
    <div className="bg-background">
      <div className="md:hidden">
        <header className="flex mb-4">
          <span className="text-#2F4A4D">
            Olá, <strong>Eduardo!</strong>
          </span>
          <button className="ml-auto text-primary">Sair</button>
        </header>
        <AccountBalance />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
        <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
          ?
        </button>
      </div>
      <div className="hidden md:flex gap-x-16 min-h-96">
        <div className="w-9/12 flex flex-col justify-between gap-10">
          <header className="flex mb-4">
            <span className="text-#2F4A4D text-5xl">
              Olá, <strong>Eduardo!</strong>
            </span>
            <button className="ml-auto text-primary">Sair</button>
          </header>
          <PendingDeliveries numberOfItems={EightItems} />
        </div>
        <aside className="flex flex-col justify-between">
          <AccountBalance />
          <ProductMenu />
        </aside>
      </div>
    </div>
  );
}
