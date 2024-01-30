"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";
import Button from "./Button";
import { IoIosHelp } from "react-icons/io";

interface FooterProps {
  backButton: boolean;
}

export default function Footer({ backButton }: FooterProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bottom-0 fixed justify-between w-full flex pb-5 right-0 px-5 z-99">
      {backButton && (
        <div className="bottom-0 fixed justify-between w-full flex pb-5 right-0 px-5 bg-white">
          <Link href={"/"} className="flex items-center">
            <LuChevronLeft className="w-[30px] h-[30px] text-default" />
            <Button 
              title="Voltar"
              className="flex items-center gap-2 text-sm font-medium text-default w-auto"
              onClick={handleGoBack}
            >
            </Button>
          </Link>
          <div className="w-full flex justify-end">
            <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
          </div>
        </div>
      )}
      <div className="w-full flex justify-end">
        <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
      </div>
    </div>
  );
}
