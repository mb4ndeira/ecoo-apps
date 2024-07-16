import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
    }

export default function TableHead({ children, ...rest

 }: TableHeadProps) {
    return <thead 
    {...rest}
    className={twMerge("flex flex-col gap-0.5 mb-0.5 text-xs font-semibold text-[#979797]", rest.className)}
    >{children}</thead>;
}