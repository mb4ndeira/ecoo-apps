"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartProvider } from "../carrinho/context";
import { useEffect } from "react";
import Script from "next/script";

export default function sendTelegram() {
  const { cart } = useCartProvider();

  useEffect(() => {
    const tg = (window as any).Telegram.WebApp;
    tg.onEvent("mainButtonClicked", sendData);
    return () => {
      tg.offEvent("mainButtonClicked", sendData);
    };
  });

  useEffect(() => {
    const tg = (window as any).Telegram.WebApp;

    tg.MainButton.setParams({
      text: "Concluir",
      color: "#545F71",
    });
  });

  useEffect(() => {
    const tg = (window as any).Telegram.WebApp;

    if (cart.length > 0) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [cart]);

  const sendData = async () => {
    const tg = (window as any).Telegram.WebApp;

    await tg.sendData(JSON.stringify(cart));
  };

  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
    </>
  );
}
