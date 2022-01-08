import { ReactNode } from "react";
import { createContext, useState } from 'react'

type Props = {
  celNum?: string[]
  children: ReactNode
}

type InitialState = {
  numbers: string[]
  setNumbers: React.Dispatch<React.SetStateAction<string[]>>
}

export const NumContext = createContext<InitialState | null>(null);

export const Table: React.FC<Props> = ({ celNum, children }) => {
  const [numbers, setNumbers] = useState(['30px', '20px', '20px'])

  const value = {
    numbers,
    setNumbers
  }

  return (
    <NumContext.Provider value={value}>
      {children}
    </NumContext.Provider>
  );
}