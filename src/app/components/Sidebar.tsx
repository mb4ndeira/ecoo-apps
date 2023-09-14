import Link from "next/link";
// import { FiDelete } from "react-icons/fi";

function Item({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link href={href} className="text-ghost-white-base text-base">
        {/* <FiDelete className="text-red-600 text-lg" alt=""/> */}
        {name}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  return (
    <nav className="w-72 min-h-screen bg-rain-forest hidden lg:block">
      <ul className="flex flex-col">
        <Item href="/produtos" name="Produtos" />
        <Item href="/inventory" name="Estoque" />
      </ul>
    </nav>
  );
}
