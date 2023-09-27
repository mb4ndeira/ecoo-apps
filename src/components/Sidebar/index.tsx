import { LuChevronRight, LuBox, LuUser, LuMessagesSquare} from 'react-icons/lu'
import { FaChartPie } from 'react-icons/fa'
import { useState } from "react";
import Item from "./components/Item";

export default function Sidebar() {
    const [activeLink, setActiveLink] = useState("dashboard")

    const handleLinkClick = (link: string) => {
      setActiveLink(link)
    }

  return (
    <aside className="flex flex-none w-80 bg-slate-gray h-screen p-5">
      <div className="w-full h-full flex flex-col justify-between">
        <nav className="flex-1 space-y-1 flex flex-col text-white">
          <Item linkName="dashboard" name="Painel de controle" icon={<FaChartPie/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="produtos" name="Meus Produtos" icon={<LuMessagesSquare/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="estoque" name="Estoque" icon={<LuBox/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="vendas" name="Minhas vendas" icon={<LuMessagesSquare/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="dados" name="Meus dados" icon={<LuUser/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="ajuda" name="Obter ajuda" icon={<LuMessagesSquare/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
        </nav>

        <nav className="border-teal-600 border-t pt-6 text-white space-y-1">
          <Item linkName="configuracoes" name="Configurações" icon={<LuMessagesSquare/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
          <Item linkName="sair" name="Sair" icon={<LuMessagesSquare/>} icon2={<LuChevronRight/>} onClick={handleLinkClick} activeLink={activeLink}/>
        </nav>
      </div>
    </aside>
  );
}
