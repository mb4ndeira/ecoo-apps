import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface FooterProps {
  backButton: boolean;
}

export default function Footer({ backButton }: FooterProps) {
  return (
    <div>
      {backButton && (
        <Link href="./">
          <button className="h-[50px] fixed bottom-[5px] left-[17px] flex">
            <HiOutlineChevronLeft size={24} color="#000" />
            <span>Voltar</span>
          </button>
        </Link>
      )}
      <button
        disabled
        className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl"
      >
        ?
      </button>
    </div>
  );
}
