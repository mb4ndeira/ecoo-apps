"use client";

import { LuChevronLeft } from "react-icons/lu";
import RenderProducts from "./components/RenderProducts";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward, IoIosHelp } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);

  const backPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page < 11) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between items-center p-4 bg-theme-background text-slate-gray">
      <div className="w-full">
        <div className="w-full flex flex-col items-center">
          <span className="mt-14 text-[30px] leading-[34px] text-center font-medium">
            Escolha um <br />
            produto
          </span>
          <span className="mt-4 max-w-[270px] text-sm font-medium text-center">
            Este produto será disponibilizado para a venda através da plataforma
          </span>
        </div>
        <RenderProducts page={page} />
      </div>
      <div className="flex flex-col items-center p-1 mt-2 justify-between w-full">
        <div className="w-full flex flex-col justify-center gap-4 items-center text-lg text-slate-gay mt-2">
          <div className="gap-4 flex">
            <button onClick={backPage}>
              <IoIosArrowBack />
            </button>
            {page}
            <button onClick={nextPage}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex">
            <LuChevronLeft className="w-[30px] h-[30px] text-theme-default" />
            <Link
              href={"/produtos/vender/ciclo"}
              className="flex items-center gap-2 text-sm font-medium text-theme-default w-auto"
            >
              Voltar
            </Link>
          </div>
          <IoIosHelp className="w-[50px] h-[50px] bg-slate-gray rounded-full border-0 text-white" />
        </div>
      </div>
    </div>
  );
}
