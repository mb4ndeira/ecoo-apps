interface ItemProps{
    name: string
    icon: JSX.Element
    icon2: JSX.Element
    linkName: string
    onClick: (link: string) => void
    activeLink: string
}

export default function Item({name, icon, icon2, linkName, onClick, activeLink}: ItemProps){
    const handleLinkClick = (link: string) => {
      onClick(link);
    }  

    const linkClasses = (linkName: string) =>
    `flex gap-6 cursor-pointer p-2 rounded-lg transition-colors group ${
      activeLink === linkName ? 'bg-teal-700' : ''
    }`;

    const iconClasses = (linkName: string) =>
    `text-2xl text-teal-600 ml-auto transition-colors ${
      activeLink === linkName ? 'text-white' : 'text-teal-600'
    }`;

    return(
        <a className={linkClasses(linkName)} onClick={() => handleLinkClick(linkName)}>
            <span className="text-xl stroke-current text-white">{icon}</span>
            {name}
            <span className={iconClasses(linkName)}>{icon2}</span>
        </a>
    )
}
  