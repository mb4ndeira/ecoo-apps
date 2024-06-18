import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export default function TableHeaderCell({
  children,
  ...rest
}: TableHeaderCellProps) {
  return (
    <th {...rest} className={twMerge("flex flex-col justify-center items-center w-full h-full px-2.5 py-1 font-semibold text-xs", rest.className)}>
      <div className="w-full">
        {children}
      </div>
    </th>
  );
}
