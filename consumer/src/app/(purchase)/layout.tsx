"use client";

import { CartProvider } from "@consumer/context/cart";
import Header from "../_components/header";
import SendTelegram from "../_components/sendTelegram";

export default function Produtores({ children }: React.PropsWithChildren) {
  return (
    <>
      <CartProvider>
        <SendTelegram/>
        <Header />
        <div className="flex flex-col w-full h-full">{children}</div>
      </CartProvider>
    </>
  );
}
