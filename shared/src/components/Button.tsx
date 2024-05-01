import React, { ButtonHTMLAttributes } from "react";

import { isUnderConstruction } from "../library/is-under-construction";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export default function Button({
  href,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || (href ? isUnderConstruction(href) : false)}
      {...rest}
    >
      {children}
    </button>
  );
}
