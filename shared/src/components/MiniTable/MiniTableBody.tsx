import React from 'react';
import { ReactNode } from 'react';

interface MiniTableBodyProps {
    children: ReactNode;
}

export default function MiniTableBody({ children }: MiniTableBodyProps) {
    return <tbody className="flex flex-col gap-0.5 w-full"
    >{children}</tbody>;
}