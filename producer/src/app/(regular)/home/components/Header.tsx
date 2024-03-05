'use client'

import Link from "next/link";
import { HiOutlineBell } from "react-icons/hi";

interface accountInformations{
  name: string
}

const handleLogout = () => {};

export async function Header({ name }: accountInformations) {
  return (
    <header className="flex items-center mb-4 text-slate-gray">
      <span className="md:text-5xl">
        Olá, <strong className="font-semibold">{name}</strong>
      </span>
      <div className="flex ml-auto">
        <button className="mr-4 text-xl md:text-2xl">
          <HiOutlineBell />
        </button>
        <Link
          onClick={handleLogout}
          href={"/api/auth/logout"}
          className="text-primary md:text-lg"
        >
          Sair
        </Link>
      </div>
    </header>
  );
}
