"use client";

import { getAccountAction } from "@shared/_actions/account/get-account";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineBell } from "react-icons/hi";

const handleLogout = () => {};

export function Header() {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const { first_name, last_name } = await getAccountAction({})

      setName(`${first_name} ${last_name}`);
    })()
  })

  return (
    <header className="flex items-center mb-4 text-slate-gray">
      <span className="text-lg">
        Olá, <strong className="font-semibold">{name}</strong>
      </span>
      <div className="flex ml-auto">
        <button className="mr-4 text-xl md:text-2xl">
          <HiOutlineBell />
        </button>
        <Link
          onClick={handleLogout}
          href={"/api/auth/logout"}
          className="text-theme-primary md:text-lg"
        >
          Sair
        </Link>
      </div>
    </header>
  );
}
