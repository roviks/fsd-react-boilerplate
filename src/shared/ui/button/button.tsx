import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
