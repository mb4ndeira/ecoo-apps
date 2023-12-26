import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

export default function Button({
  title,
  className,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-full px-2 py-3 font-semibold rounded-lg ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
