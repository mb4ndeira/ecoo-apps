"use client"

import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      handleWindowResize()
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);
  
  const showSidebar = windowWidth >= 640;
  
  if (pathname === '/login') {
    return children
  }
  return (
      <>
        {showSidebar && <Sidebar />}
        {children}
      </>
  )
}
