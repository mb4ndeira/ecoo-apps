import { ReactNode, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  error?: string;
  icon?: ReactNode;
  label: string;
  register: UseFormRegisterReturn;
  type?: "email" | "password" | "text" | "number";
  className?: string
}

export default function Input({ label, icon, error, register, type, className }: Props) {
  const inputClassname = `w-full flex item-center mt-2 p-3 border-slate-gray z-0 border rounded-lg ${className}`
  const [showPassword, setShowPassword] = useState(false);

  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col text-slate-gray relative">
      <label className="text-sm font-medium text-slate-gray">
        {label}
      </label>
      <div className="relative">
        <input
          {...register}
          className={inputClassname}
          type={showPassword ? "text" : "password"}
        />
        <div onClick={handleIconClick} className="cursor-pointer absolute text-xl top-[5px] right-0 pr-3 flex items-center h-full z-50">
          {icon}
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
