import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  title,
  className,
  onClick,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-base px-2 py-3 font-semibold rounded-lg ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
