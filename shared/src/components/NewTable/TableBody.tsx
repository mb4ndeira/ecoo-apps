import React from 'react';
import { ReactNode } from 'react';
import { twMerge } from "tailwind-merge";

interface TableBodyProps {
    children: ReactNode;
}

export default function TableBody({ children, ...rest }: TableBodyProps) {
    return <tbody {...rest} className=
    {twMerge("flex flex-col gap-0.5 w-full overflow-y-auto", rest.className)}
    
    >{children}</tbody>;
}