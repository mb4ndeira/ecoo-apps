"use client";
import { useCartProvider } from "@consumer/context/cart";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  const listPath = decodeURI(pathname).split("/");
  const path = listPath[1]
  const titlePath = listPath[3]

  const mapPath: any = {
    "inicio": { title: "Pesquisa de Produtos", back: null },
    "produtores": { title: "Produtores", back: "/inicio" },
    "ofertas": { title: titlePath, back: "/produtores" },
    "carrinho": { title: "Carrinho", back: "/produtores"}
  }
  
  const title = mapPath[path]?.title ?? "Null"
  const linkBack = mapPath[path]?.back

  const { cart } = useCartProvider();

  return (
    <>
    <div className="w-full min-h-[72px] flex items-center bg-[#F7F7F7]">
      <div className="flex-none w-5 h-5 ml-3">
        {linkBack ? (
          <Link href={linkBack}>
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
    </>
  );
}
