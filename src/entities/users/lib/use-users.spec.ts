import { act, renderHook } from '@testing-library/react'

import { useUsers } from './use-users'
import { fetchUsersMockFailure, fetchUsersMockOk } from '../api/mocks'

describe('useUsers', () => {
  it('should set users on ok response (200)', () => {
    const { usersOkFixture } = fetchUsersMockOk()

    const { result } = renderHook(useUsers)

    act(() => {
      console.log('I dont know why its working')
    })

    expect(result.current.users).toStrictEqual(usersOkFixture)
  })

  it('should set error on failure response (500)', () => {
    fetchUsersMockFailure()

    const { result } = renderHook(useUsers)

    act(() => {
      console.log('I dont know why its working')
    })

    expect(result.current.error).toBe('Error fetching users')
  })
})
