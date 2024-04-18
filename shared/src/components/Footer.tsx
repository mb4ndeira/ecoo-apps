"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";

import Button from "./Button";

export default function Footer({
  hasPreviousPagePaths,
  hasHelpButtonPaths,
  bgColor,
}: {
  hasPreviousPagePaths: Record<string, boolean>;
  hasHelpButtonPaths: Record<string, boolean>;
  bgColor: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const convertPathname = (path: string) => {
    return path
      .split("/")
      .map((segment) =>
        isNaN(Number(segment)) || segment === "" ? segment : "[id]"
      )
      .join("/");
  };

  const convertedPathname = convertPathname(pathname);

  const hasPreviousPage =
    hasPreviousPagePaths[convertedPathname] !== undefined
      ? hasPreviousPagePaths[convertedPathname]
      : true;

  const hasHelpButton =
    hasHelpButtonPaths[convertedPathname] !== undefined
      ? hasHelpButtonPaths[convertedPathname]
      : true;

  const handleReturn = () => {
    router.back();
  };

  const ReturnButton = () => (
    <Link href={"/"} className="flex items-center">
      <LuChevronLeft className="w-[30px] h-[30px] text-[${bgColor}]" />
      <Button
        title="Voltar"
        className="flex items-center gap-2 text-sm font-medium text-[${bgColor}] w-auto"
        onClick={handleReturn}
      />
    </Link>
  );

  const HelpButton = () => (
    <IoIosHelp
      className="w-[50px] h-[50px] rounded-full border-0 text-white"
      style={{ backgroundColor: bgColor }}
    />
  );

  function justify() {
    if (hasPreviousPage && hasHelpButton) {
      return "justify-between";
    } else if (hasPreviousPage) {
      return "justify-start";
    } else if (hasHelpButton) {
      return "justify-end";
    }
  }

  return (
    <>
      {hasPreviousPage || hasHelpButton ? (
        <div className={`flex ${justify()} w-full p-5 bg-background`}>
          {hasPreviousPage && <ReturnButton />}
          {hasHelpButton && <HelpButton />}
        </div>
      ) : null}
    </>
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
