import CycloInformaiton from "./home/components/CycloInformation";
import { AccountBalance } from "./home/components/AccountBalance";
import { Header } from "./home/components/Header";
import { PendingDeliveries } from "./home/components/PendingDeliveries";
import { ProductMenu } from "./home/components/ProductMenu";

import { getAccountAction } from "@shared/next/_actions/account/get-account";

export default async function Home() {
  const FourItems = 4;

  const accountInformation = (await getAccountAction({}).catch((err) => {
    console.error(err);
  })) as { name: string };

  return (
    <div className="bg-background px-8 pb-10 pt-10">
      <div>
        {<Header name={accountInformation?.name} />}
        <AccountBalance />
        <CycloInformaiton />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
      </div>
    </div>
  );
}
