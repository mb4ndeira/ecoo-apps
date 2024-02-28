"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";

import Button from "./Button";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const hasPreviousPage = !!pathname && pathname !== "/";

  const handleReturn = () => {
    router.back();
  };

  const ReturnButton = () => (
    <Link href={"/"} className="flex items-center">
      <LuChevronLeft className="w-[30px] h-[30px] text-default" />
      <Button
        title="Voltar"
        className="flex items-center gap-2 text-sm font-medium text-default w-auto"
        onClick={handleReturn}
      />
    </Link>
  );

  return (
    <div className="flex justify-between w-full p-5">
      {hasPreviousPage && <ReturnButton />}
      <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
    </div>
  );
}

{
  /* <div className="w-full h-full flex justify-between items-end">
<div className="w-full flex items-center">
  <LuChevronLeft className="w-[30px] h-[30px] text-[#3E5155]" />
</div>
<div>
  <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
</div>
</div> */
}
