import { ACTIONS } from "@shared/_actions";

import CycloInformaiton from "./home/components/CycloInformation";
import { Header } from "./home/components/Header";
import { PendingDeliveries } from "./home/components/PendingDeliveries";
import { ProductMenu } from "./home/components/ProductMenu";

export default async function Home() {
  const FourItems = 4;

  const { name } = await ACTIONS["get-account"].execute({});

  return (
    <div className="bg-theme-background h-[90vh] px-8 pb-10 pt-10">
      <div>
        <Header name={name} />
        <CycloInformaiton />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
      </div>
    </div>
  );
}
