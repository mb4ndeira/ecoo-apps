import React, { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { isUnderConstruction } from "../library/is-under-construction";

import Button, { ButtonProps } from "./Button";

interface LinkButtonProps extends NextLinkProps {
  children: ReactNode;
  buttonProps: ButtonProps;
}

export default function LinkButton({
  href,
  children,
  buttonProps,
  ...rest
}: LinkButtonProps) {
  return (
    <NextLink {...rest}>
      <Button disabled={isUnderConstruction(href)} {...buttonProps}>
        {children}
      </Button>
    </NextLink>
  );
}
