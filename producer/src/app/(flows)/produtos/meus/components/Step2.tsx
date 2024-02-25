import { AiFillCheckCircle } from "react-icons/ai";

interface FormProps {
  goBackClick: () => void;
}

export default function Step2() {
  return (
    <div className="w-full h-screen flex justify-center flex-col p-4">
      <div className="w-full h-4/5 flex items-center flex-col justify-center">
        <AiFillCheckCircle className="w-[100px] h-[100px] text-rain-forest" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Produto <br /> removido!
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Este produto não está mais a <br /> venda pela cooperativa.
        </span>
      </div>
    </div>
  );
}
