"use client"

import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();


  if (pathname === '/login') {
    return children
  }

  return (
    <>
      <Sidebar />
      {children}
    </>
  )
};