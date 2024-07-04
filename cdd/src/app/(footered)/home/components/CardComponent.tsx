import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface CardComponentProps{
  title: string,
  link: string
  linkIcon?: string
}

export default function CardComponent({ title, link, linkIcon }: CardComponentProps){
  return (
    <div className="w-full h-full items-center mt-5 p-4 rounded-2xl bg-white flex gap-4">
      <div className="w-[90%] h-full flex items-center">
        <Link href={link} className="w-full">
          <button className="w-full bg-[#4A403A] rounded-md p-4 text-white font-semibold">
            {title}
          </button>
        </Link>
      </div>
      <div className="w-[10%] h-full flex justify-center items-center">
        <button disabled className="rounded-full p-2">
          <HiOutlineInformationCircle size={24} className="text-[#7B7B7B]" />
        </button>
      </div>
    </div>
  );
}