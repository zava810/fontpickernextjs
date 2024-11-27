// app/globals.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface GlobalContextType { globalValue: number; setGlobalValue: React.Dispatch<React.SetStateAction<number>>; }
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [globalValue, setGlobalValue] = useState<number>(0);
  return ( <GlobalContext.Provider value={{ globalValue, setGlobalValue }}> {children} </GlobalContext.Provider> );
};
export const useGlobalValue = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) { throw new Error('useGlobalValue must be used within a GlobalProvider'); }
  return context;
};

