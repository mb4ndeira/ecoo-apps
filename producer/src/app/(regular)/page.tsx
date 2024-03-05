import { AccountBalance } from "./home/components/AccountBalance";
import { Header } from "./home/components/Header";
import { PendingDeliveries } from "./home/components/PendingDeliveries";
import { ProductMenu } from "./home/components/ProductMenu";

import { GetAccountInformation } from "./get.account.informations";

export default async function Home() {
  const FourItems = 4;

  const accountInformation = await GetAccountInformation();

  return (
    <div className="bg-background px-8 pb-10 pt-10">
      <div>
        {<Header name={accountInformation?.first_name as string} />}
        <AccountBalance />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
      </div>
    </div>
  );
}
