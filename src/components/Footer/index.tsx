"use client";
import { useRouter } from "next/navigation";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface FooterProps {
  backButton: boolean;
}

export default function Footer({ backButton }: FooterProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      {backButton && (
        <button
          className="h-[50px] fixed bottom-[5px] left-[17px] flex"
          onClick={handleGoBack}
        >
          <HiOutlineChevronLeft size={24} color="#000" />
          <span>Voltar</span>
        </button>
      )}
      <button className="w-[50px] h-[50px] bg-[#3E5155] rounded-full fixed bottom-[19px] right-[17px] text-white text-3xl">
        ?
      </button>
    </div>
  );
}
