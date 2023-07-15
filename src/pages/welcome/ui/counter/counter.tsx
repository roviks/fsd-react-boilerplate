import { ChangeEvent } from 'react'
import { Button } from '@/shared/ui/button'

import { useCounter } from '../../lib/use-counter/use-counter'

import styles from './styles.module.css'

export const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(0)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    if (value) setCount(parseInt(value))
    else setCount(0)
  }

  return (
    <div className={styles.wrapper}>
      <Button onClick={increment}>increment</Button>

      <input
        className={styles.input}
        type="number"
        name="amount"
        value={count}
        onChange={handleInputChange}
      />

      <Button onClick={decrement}>decrement</Button>
    </div>
  )
}
