"use client"

import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const pathname = usePathname();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])
  
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
};