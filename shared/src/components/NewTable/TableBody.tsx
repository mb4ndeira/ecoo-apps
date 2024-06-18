import React from 'react';
import { ReactNode } from 'react';

interface TableBodyProps {
    children: ReactNode;
}

export default function TableBody({ children }: TableBodyProps) {
    return <tbody className="flex flex-col gap-0.5 w-full overflow-y-auto"
    >{children}</tbody>;
}