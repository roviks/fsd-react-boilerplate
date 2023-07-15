import { render, screen } from '@testing-library/react'

import { Users } from './users'
import { fetchUsersMockFailure, fetchUsersMockOk } from '../../api/mocks'

describe('Users', () => {
  it('should render headline and list of users', async () => {
    const { usersOkFixture } = fetchUsersMockOk()

    render(<Users className="" />)

    const heading = await screen.findByRole('heading', { name: 'Users' })
    const users = await screen.findAllByRole('listitem')

    expect(users).toHaveLength(usersOkFixture.length)
    expect(heading).toBeInTheDocument()
  })

  it('should handle the error', async () => {
    fetchUsersMockFailure()

    render(<Users className="" />)

    const error = await screen.findByText('Error fetching users')

    expect(error).toBeInTheDocument()
  })
})
