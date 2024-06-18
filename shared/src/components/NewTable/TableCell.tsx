import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export default function TableCell({ children, ...rest }: TableCellProps) {
  return (
    <td {...rest} className={twMerge("h-[inherit] flex justify-center items-center text-base font-normal text-[#545F71] max-w-full overflow-x-hidden", rest.className)}>
      <div className="truncate">
        {children}
      </div>
    </td>
  );
}
