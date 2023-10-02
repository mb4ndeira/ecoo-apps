import { LuBox, LuUser, LuMessagesSquare } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    return storedActiveLink || "/";
  });

  const pathName = usePathname();

  useEffect(() => {
    setActiveLink(pathName);
  }, [pathName]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <aside
        className={`w-20 flex flex-none desktop:w-80 bg-slate-gray h-screen p-5 ${
          open ? "w-80" : "w-20"
        } duration-200`}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <nav className="flex-1 space-y-1 flex flex-col text-white">
            <div className="gap-6 cursor-pointer p-2 desktop:hidden">
              <BiMenu onClick={() => setOpen(!open)} className="text-2xl" />
            </div>
            <Item
              sideBar={open}
              linkName="/"
              name="Painel de controle"
              icon={<FaChartPie />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="produtos"
              name="Meus Produtos"
              icon={<LuMessagesSquare />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="estoque"
              name="Estoque"
              icon={<LuBox />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="vendas"
              name="Minhas vendas"
              icon={<LuMessagesSquare />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="dados"
              name="Meus dados"
              icon={<LuUser />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="ajuda"
              name="Obter ajuda"
              icon={<LuMessagesSquare />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
          </nav>

          <nav className="border-teal-600 border-t pt-6 text-white space-y-1">
            <Item
              sideBar={open}
              linkName="configuracoes"
              name="Configurações"
              icon={<LuMessagesSquare />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
            <Item
              sideBar={open}
              linkName="sair"
              name="Sair"
              icon={<LuMessagesSquare />}
              onClick={handleLinkClick}
              activeLink={activeLink}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
