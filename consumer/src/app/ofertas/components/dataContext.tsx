import { createContext, useContext, useState, ReactNode } from 'react';

const DataContext = createContext<any>([]);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<any[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  // if (context === undefined) {
  //   throw new Error('useData must be used within a DataProvider');
  // }
  return context;
};