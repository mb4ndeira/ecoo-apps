import React, { ReactNode } from "react";

interface MiniTableHeaderCellProps {
    children: ReactNode;
}

export default function MiniTableHeaderCell({ children }: MiniTableHeaderCellProps) {
    return <th className="text-left font-normal">{children}</th>;
}