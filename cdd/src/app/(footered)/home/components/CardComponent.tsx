import Button from "@shared/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { toast } from "sonner";

interface CardComponentProps{
  title: string,
  link: string
  linkIcon?: string
  verifyCycle?: boolean
}

export default function CardComponent({ title, link, linkIcon, verifyCycle }: CardComponentProps){
  const router = useRouter()

  const handleClickButton = (link: string) => {
    const cycle_idString = localStorage.getItem("selected-cycle") as string

    if(!cycle_idString){
        toast.warning("Selecione um ciclo para começar uma oferta!")
        return
    }

    const { id } = JSON.parse(cycle_idString)
  
    localStorage.setItem("offer-products-data",
      JSON.stringify({
        cycle_id: id
      })
    )

    router.push("/pedidos")
  }

  return (
    <div className="w-full h-full items-center mt-5 p-4 rounded-2xl bg-white flex gap-4">
      <div className="w-[90%] h-full flex items-center">
        {link && !verifyCycle ? (
          <Link href={link} className="w-full">
            <Button className="w-full bg-[#4A403A] rounded-md p-4 text-white font-semibold">
              {title}
            </Button>
          </Link>
        ) : (
          <Button onClick={() => handleClickButton(link)} className="w-full bg-[#4A403A] rounded-md p-4 text-white font-semibold">
            {title}
          </Button>
        )}
      </div>
      <div className="w-[10%] h-full flex justify-center items-center">
        <button disabled className="rounded-full p-2">
          <HiOutlineInformationCircle size={24} className="text-[#7B7B7B]" />
        </button>
      </div>
    </div>
  );
}