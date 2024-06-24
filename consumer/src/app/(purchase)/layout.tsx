"use client";

import SendTelegram from "../sendtelegram/page";

export default function Produtores({ children }: React.PropsWithChildren) {
  return (
    <>
      <SendTelegram></SendTelegram>
      <div className="flex flex-col w-full h-screen">{children}</div>
    </>
  );
}
