import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps
  extends React.TdHTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export default function TableRow({ children, ...rest }: TableRowProps) {
  return (
    <tr
      {...rest}
      className={twMerge(
        "h-[2.875rem] bg-white",
        rest.className
      )}
    >
      {children}
    </tr>
  );
}
