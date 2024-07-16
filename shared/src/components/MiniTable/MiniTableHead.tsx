import React, { ReactNode } from "react";

interface MiniTableHeadProps {
    children: ReactNode;
    }

export default function MiniTableHead({ children }: MiniTableHeadProps) {
    return <thead>{children}</thead>;
}