"use client";
import { useEffect, useState } from "react";
import { LuBox, LuUser, LuMessagesSquare } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { usePathname } from "next/navigation";

import Item from "./components/Item";

export default function Sidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (pathname === "/login") {
    return <></>;
  }

  return (
    <>
      <aside
        className={`mobileTeste:h-auto mobileTeste:p-2 mobileTeste:w-auto mobileTeste:rounded-lg sm:absolute 
      desktop:static w-20  flex-none desktop:w-80 desktop:z-10 bg-slate-gray h-screen p-5 
      ${
        open
          ? "w-80 z-50 sm:absolute mobileTeste:w-80 mobileTeste:h-screen mobileTeste:fixed mobile:top-0 mobileTeste:left-0 mobileTeste:rounded-none"
          : "w-20 mobileTeste:w-auto"
      } duration-200`}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <nav className="flex-1 space-y-1 flex flex-col text-white">
            <div className="gap-6 cursor-pointer p-2 desktop:hidden">
              <BiMenu onClick={() => handleClick()} className="text-2xl" />
            </div>
            <div className={`${open ? "" : "hidden"} sm:block`}>
              <Item
                sideBar={open}
                linkName="/"
                name="Painel de controle"
                icon={<FaChartPie />}
              />
              <Item
                sideBar={open}
                linkName="/produtos"
                name="Meus Produtos"
                icon={<LuMessagesSquare />}
              />
              <Item
                sideBar={open}
                linkName="/estoque"
                name="Estoque"
                icon={<LuBox />}
              />
              <Item
                sideBar={open}
                linkName="/vendas"
                name="Minhas vendas"
                icon={<LuMessagesSquare />}
              />
              <Item
                sideBar={open}
                linkName="/dados"
                name="Meus dados"
                icon={<LuUser />}
              />
              <Item
                sideBar={open}
                linkName="/ajuda"
                name="Obter ajuda"
                icon={<LuMessagesSquare />}
              />
            </div>
          </nav>

          <nav
            className={`border-teal-600 border-t pt-6 text-white space-y-1 block ${
              open ? "" : "hidden"
            }`}
          >
            <Item
              sideBar={open}
              linkName="/configuracoes"
              name="Configurações"
              icon={<LuMessagesSquare />}
            />
            <Item
              sideBar={open}
              linkName="/sair"
              name="Sair"
              icon={<LuMessagesSquare />}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
