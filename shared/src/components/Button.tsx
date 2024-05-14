import React, { ButtonHTMLAttributes } from "react";
import { isUnderConstruction } from "../library/is-under-construction";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export default function Button({
  href,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || (href ? isUnderConstruction(href) : false);
  
  const buttonClasses = `${className} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      disabled={isDisabled}
      className={buttonClasses}
      {...rest}
    >
      {children}
    </button>
  );
}
