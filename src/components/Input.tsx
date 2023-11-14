import { ChangeEvent, ReactNode, useState } from "react";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  icon?: ReactNode;
  label: string;
  register: UseFormRegisterReturn;
  type?: "email" | "password" | "text" | "number";
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | string | undefined;
  value?: string 
}

export default function Input({ label, icon, error, register, type, className, onChange, value }: Props) {
  const inputClassname = `w-full flex item-center mt-2 p-3 border-slate-gray z-0 border rounded-lg ${className}`
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type ? (showPassword ? "text" : type) : "text";

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
          type={inputType}
          onChange={onChange}
          value={value}
        />
        <div onClick={handleIconClick} className="cursor-pointer absolute text-xl top-[5px] right-0 pr-3 flex items-center h-full z-50">
          {icon}
        </div>
      </div>
      {typeof error === "string" && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}

