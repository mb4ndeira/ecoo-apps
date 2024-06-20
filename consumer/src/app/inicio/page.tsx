"use client";

import Image from "next/image";
import Link from "next/link";

export default function Inicio() {

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full min-h-[72px] flex items-center bg-[#F7F7F7]">
        <div className="flex-none w-5 h-5 ml-3">
          {/* <div className="w-5 h-5 bg-white rounded-3xl">
              <Image src="/back.png" alt="back" width={15} height={11.7}></Image>
            </div> */}
        </div>
        <div className="grow text-center text-base font-inter m-2">
          Pesquisa de Produtos
        </div>
        <div className="flex-none mr-3">
          <div className="w-5 h-5 bg-white rounded-3xl">
            <Link href={"/carrinho"}>
              <Image src="/cart.png" alt="cart" width={15} height={15}></Image>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">

      <div className="w-full min-h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
          <div className="flex-none w-20 min-h-20 bg-[#00735E] m-2 rounded-2xl"></div>
          <div className="grow flex flex-col items-center justify-center min-h-20 mt-2 mb-2">
            <span className="w-full text-left font-poppins text-base">
              Categorias
            </span>
          </div>
          <div className="flex min-w-24 min-h-20 items-center justify-center m-2">
              <Image
                src="/seta-produtor.png"
                alt="seta-produtor"
                width={10}
                height={7}
              ></Image>
          </div>
        </div>

        <div className="w-full min-h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
          <div className="flex-none w-20 min-h-20 bg-[#00735E] m-2 rounded-2xl"></div>
          <div className="grow flex flex-col items-center justify-center min-h-20 mt-2 mb-2">
            <span className="w-full text-left font-poppins text-base">
              Produtores
            </span>
          </div>
          <div className="flex min-w-24 min-h-20 items-center justify-center m-2">
            <Link href={"/produtores"}>
              <Image
                src="/seta-produtor.png"
                alt="seta-produtor"
                width={10}
                height={7}
              ></Image>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
