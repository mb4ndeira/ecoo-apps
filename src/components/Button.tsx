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
      className={`w-full px-3 py-4 font-semibold rounded-lg ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
