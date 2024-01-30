import Button from "./Button";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0 fixed justify-between w-full flex pb-5 right-0 px-5 z-99 bg-white">
      <Link href={"/"} className="flex items-center">
        <LuChevronLeft className="w-[30px] h-[30px] text-default" />
        <Button 
          title="Voltar"
          className="flex items-center gap-2 text-sm font-medium text-default w-auto"
        >
        </Button>
      </Link>
      <div>
        <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
      </div>
    </div>
  );
}