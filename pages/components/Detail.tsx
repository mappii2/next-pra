import { ReactNode } from "react"
import { useContext } from 'react'
import { NumContext } from './Table'

type Props = {
  children: ReactNode
}

export const Detail: React.FC<Props> = ({ children }) => {
  const auth = useContext(NumContext);
  return (
    <div>
      {children}
    </div>
  )
}