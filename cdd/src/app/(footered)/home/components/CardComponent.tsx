'use client';

import { useGetLocalStorage } from "@cdd/app/hooks/useGetLocalStorage";
import { useCycleProvider } from "@shared/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { toast } from "sonner";

interface CardComponentProps {
  title: string,
  link: string,
  linkIcon?: string,
  isSelectedCycle?: boolean
}

export default function CardComponent({ title, link, linkIcon, isSelectedCycle }: CardComponentProps) {
  const router = useRouter();

  const handleClickSelectedCycle = () => {
    const cycle = useGetLocalStorage('selected-cycle')

    if (!cycle) {
      toast.warning("Selecione um ciclo para continuar!");
      return;
    }

    router.push(link);
  };

  return (
    <div className="w-full h-full items-center mt-5 p-4 rounded-2xl bg-white flex gap-4">
      <div className="w-[90%] h-full flex items-center">
        <button onClick={handleClickSelectedCycle} className="w-full bg-[#4A403A] rounded-md p-4 text-white font-semibold">
          {title}
        </button>
      </div>
      <div className="w-[10%] h-full flex justify-center items-center">
        <button disabled className="rounded-full p-2">
          <HiOutlineInformationCircle size={24} className="text-[#7B7B7B]" />
        </button>
      </div>
    </div>
  );
}
