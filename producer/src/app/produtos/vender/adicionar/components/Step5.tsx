import Button from "@/components/Button";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosHelp } from "react-icons/io";

export default function Step5() {
  return (
    <div className="w-full h-screen flex justify-center flex-col">
      <div className="w-full h-4/5 flex items-center flex-col justify-center">
        <AiFillCheckCircle className="w-[100px] h-[100px] text-rain-forest" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Seu produto já <br /> está a venda!
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Fique atento as notificações do <br /> nosso aplicativo para não
          perder <br /> os prazos de envio até o nosso
          <br /> centro de distribuição.
        </span>
      </div>
      <div className="w-full h-1/5 bg-red flex flex-col justify-end gap-4">
        <Link href={"/"}>
          <Button
            className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px]"
            title="Voltar para a tela inicial"
          />
        </Link>
        <Link href={"/produtos/vender"}>
          <Button
            className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px]"
            title="Colocar outro produto a venda"
          />
        </Link>
        <div className="w-full flex justify-end">
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
        </div>
      </div>
    </div>
  );
}
