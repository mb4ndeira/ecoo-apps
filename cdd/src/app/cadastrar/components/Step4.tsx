import Button from "@/components/Button";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

export default function FormCadastrar4() {
  return (
    <div className="w-full h-screen flex justify-center flex-col">
      <div className="w-full h-4/5 flex items-center flex-col justify-center">
        <AiFillCheckCircle className="w-[100px] h-[100px] text-rain-forest" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Conta criada <br /> com sucesso!
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          O seu cadastro como produtor <br /> foi concluído com sucesso
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Agora voce pode adicionar <br /> informações de pagamento <br /> para
          a sua conta
        </span>
      </div>
      <div className="w-full h-1/5 bg-red flex flex-col justify-end gap-4">
        <Button
          className="text-[15px] font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px]"
          title="Adicionar informações de pagamento"
        />
        <Link href={"/login"}>
          <Button
            className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px]"
            title="Fazer login"
          />
        </Link>
      </div>
    </div>
  );
}
