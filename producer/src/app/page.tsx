import Footer from "@/components/Footer";

import { AccountBalance } from "./home/components/AccountBalance";
import { Header } from "./home/components/Header";
import { PendingDeliveries } from "./home/components/PendingDeliveries";
import { ProductMenu } from "./home/components/ProductMenu";

export default function Home() {
  const FourItems = 4;
  const TenItems = 10;

  return (
    <div className="bg-background">
      <div className="md:hidden">
        <Header />
        <AccountBalance />
        <ProductMenu />
        <PendingDeliveries numberOfItems={FourItems} />
        <Footer backButton={false} />
      </div>
      <div className="hidden md:flex flex-col gap-x-16 min-h-96">
        <div className="w-full flex flex-col justify-between gap-10">
          <Header />
        </div>
        <div className="mt-14 flex gap-x-10">
          <PendingDeliveries numberOfItems={TenItems} />
          <div className="flex flex-col justify-between">
            <AccountBalance />
            <ProductMenu />
          </div>
        </div>
        <Footer backButton={false} />
      </div>
    </div>
  );
}
