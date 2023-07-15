import { act, renderHook } from '@testing-library/react'
import { useCounter } from './use-counter'

describe('useCounter', () => {
  it('should render the initial count', () => {
    const { result } = renderHook(useCounter)

    expect(result.current.count).toBe(0)
  })

  it('should accept and render same initial count', () => {
    const { result } = renderHook(useCounter, { initialProps: 10 })

    expect(result.current.count).toBe(10)
  })

  it('should correctly increment the count', () => {
    const { result } = renderHook(useCounter)

    act(() => result.current.increment())

    expect(result.current.count).toBe(1)
  })
  it('should correctly decrement the count', () => {
    const { result } = renderHook(useCounter)

    act(() => result.current.decrement())

    expect(result.current.count).toBe(-1)
  })
})
