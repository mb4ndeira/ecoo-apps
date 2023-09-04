import { ReactNode } from "react";
import Error from "../Error";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  // type: string;
  error?: string;
  icon: ReactNode;
  label: string;
  register: UseFormRegisterReturn;
}

export default function Input({ label, icon, error, register }: Props) {
  return (
    <div className="flex flex-col group text-slate-gray">
      <input
        {...register}
        className="flex h-10 pointer-events-auto border-[1px] bg-ghost-white-100 px-4 rounded-md outline-none border-slate-gray peer mt-3"
        type="text"
        placeholder=""
      />
      <div className="flex items-center -top-8 justify-between relative pointer-events-none px-4 transition-all ease-in duration-150 peer-focus:-top-16 peer-[:not(:placeholder-shown)]:-top-16">
        <label htmlFor="" className="bg-ghost-white-100 rounded-lg leading-6">
          {label}
        </label>
        <div className="bg-ghost-white-100">
          {icon}
        </div>
      </div>
      {error && <Error message={error}/>}
    </div>
  )
}