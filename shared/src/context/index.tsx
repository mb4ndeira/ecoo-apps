import React, { createContext, useState, useContext, ReactNode } from "react";

// Interface dos dados do ciclo
export interface CycleData {
  id: string;
  alias: string;
  offering: number[];
  ordering: number[];
  dispatching: number[];
}

interface CycleContextProps {
  cycle: CycleData | undefined;
  setCycle: (cycle: CycleData | undefined) => void;
}

const CycleContext = createContext<CycleContextProps>({
  cycle: undefined,
  setCycle: () => {},
});

interface CycleProviderProps {
  children: ReactNode;
}

export function CycleProvider({ children }: CycleProviderProps) {
  const [cycle, setCycle] = useState<CycleData | undefined>();

  return (
    <CycleContext.Provider value={{ cycle, setCycle }}>
      {children}
    </CycleContext.Provider>
  );
}

export default function useCycleProvider() {
  return useContext(CycleContext);
}