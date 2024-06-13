import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CycleData } from '@shared/domain/use-cases/get-cycles';

interface CycleContextProps {
  cycle: CycleData | undefined;
  setCycle: (cycle: CycleData | undefined) => void;
}

const CycleContext = createContext<CycleContextProps>({
  cycle: undefined,
  setCycle: () => {},
});

export function CycleProvider({ children }: { children: ReactNode }) {
  const [cycle, setCycle] = useState<CycleData | undefined>();

  return (
    <CycleContext.Provider value={{ cycle, setCycle }}>
      {children}
    </CycleContext.Provider>
  );
}

export function useCycleProvider() {
  return useContext(CycleContext);
}
