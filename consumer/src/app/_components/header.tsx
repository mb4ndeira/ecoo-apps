"use client";
import Image from "next/image";
import Link from "next/link";

import { useCartProvider } from "../(purchase)/carrinho/context";

export default function Header({
  linkBack,
  title,
}: {
  linkBack: string | null;
  title: string;
}) {
  const { cart, setCart } = useCartProvider();

  return (
    <div className="w-full min-h-[72px] flex items-center bg-[#F7F7F7]">
      <div className="flex-none w-5 h-5 ml-3">
        {linkBack ? (
          <Link href={linkBack ? linkBack : "/"}>
            <div className="w-5 h-5 bg-white rounded-3xl">
              <Image
                src="/back.png"
                alt="back"
                width={15}
                height={11.7}
              ></Image>
            </div>
          </Link>
        ) : null}
      </div>
      <div className="grow text-center text-base font-inter m-2">{title}</div>
      <div className="flex-none mr-3">
        {/* {cart.products.length} */}
        {cart.length > 0 ? (
          <div className="w-4 h-4 bg-[#FF7070] font-inter text-[10px] text-white rounded-full text-center">
            {cart.length}
          </div>
        ) : null}
        <div className="w-6 h-6 bg-white rounded-3xl">
          <Link href={"/carrinho"}>
            <Image src="/cart.png" alt="cart" width={15} height={15}></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
