import Link from "next/link"
import { LuChevronRight } from "react-icons/lu"
import { usePathname } from 'next/navigation'

interface ItemProps{
    name: string
    icon: JSX.Element
    linkName: string
    onClick?: (link: string) => void
    activeLink?: string
    sideBar: boolean
}

export default function Item({name, icon, linkName, onClick, activeLink, sideBar}: ItemProps){
    const handleLinkClick = (link: string) => {
      localStorage.setItem("activeLink", linkName);
    } 

    const pathName = usePathname()
    
    const handleClick = () => {
      handleLinkClick(linkName)
    }

    const linkClasses = (linkName: string) =>
    `flex gap-6 cursor-pointer p-2 rounded-lg transition-colors group ${
      pathName === linkName ? 'bg-teal-700' : ''
    }`;

    const iconClasses = (linkName: string) =>
    `text-2xl text-teal-600 ml-auto transition-colors ${sideBar ? "desktop:inline" : "hidden desktop:inline"} ${
      pathName === linkName ? 'text-white' : 'text-teal-600'
    }`;

    return(
        <Link href={linkName} className={linkClasses(linkName)} onClick={() => handleLinkClick(linkName)}>
            <span className="text-xl stroke-current text-white">{icon}</span>
            <span className={sideBar ? "desktop:inline" : "hidden desktop:inline"}>{name}</span>
            <span className={iconClasses(linkName)}><LuChevronRight/></span>
        </Link>
    )
}



  