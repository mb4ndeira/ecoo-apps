"use client";
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function OldButton({
  title,
  className,
  onClick,
  ...rest
}: ButtonProps) {
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
