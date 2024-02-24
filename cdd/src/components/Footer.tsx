import Button from "./Button";
import { LuChevronLeft } from "react-icons/lu";
import { IoIosHelp } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between max-w-md mx-auto bg-white p-5">
      <Link href={"/"} className="flex items-center">
        <LuChevronLeft className="w-[30px] h-[30px] text-default" />
        <Button
          title="Voltar"
          className="flex items-center gap-2 text-sm font-medium text-default w-auto"
        ></Button>
      </Link>
      <div>
        <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
      </div>
    </div>
  );
}
