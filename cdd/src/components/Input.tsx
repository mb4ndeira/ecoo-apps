import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

interface Props {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  icon?: ReactNode;
  label?: string;
  register?: UseFormRegisterReturn;
  type?: "email" | "password" | "text" | "number";
  className?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => void | string | undefined;
  value?: string;
}

export default function Input({
  label,
  icon,
  error,
  register,
  type,
  className,
  onChange,
  value,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const handleIconClick = () => {
    console.log("click");
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log(inputType);
  }, [inputType]);

  return (
    <div className="relative flex flex-col text-slate-gray">
      <label className="text-sm inter-font font-normal text-slate-gray">
        {label}
      </label>
      <div className="relative">
        <input
          {...register}
          className={`z-0 item-center w-full flex mt-2 p-3 border border-slate-gray rounded-lg inter-font font-normal ${className}`}
          type={inputType}
          onChange={onChange}
          value={value}
        />
        <div
          onClick={handleIconClick}
          className="cursor-pointer absolute text-xl top-[5px] right-0 pr-3 flex items-center h-full z-50"
        >
          {icon}
        </div>
      </div>
      {typeof error === "string" && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}
