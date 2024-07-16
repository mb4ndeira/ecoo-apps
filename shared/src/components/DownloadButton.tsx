import React, { ButtonHTMLAttributes } from "react";
import { isUnderConstruction } from "../library/is-under-construction";

export interface DownloadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function DownloadButton({
  disabled,
  children,
  className,
  onClick,
  ...rest
}: DownloadButtonProps) {
  const isDisabled = disabled || (rest.href ? isUnderConstruction(rest.href) : false);

  const buttonClasses = `${className} ${
    isDisabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button disabled={disabled} className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
