import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './button'

describe('Button', () => {
  it('should render correctly', () => {
    const mockText = 'Test button'

    const mockClickHandle = jest.fn()

    render(<Button onClick={mockClickHandle}>{mockText}</Button>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(mockText)
  })

  it('should call onClick handler', async () => {
    const user = userEvent.setup()

    const mockText = 'Test button'

    const spyOnClick = jest.fn()

    render(<Button onClick={spyOnClick}>{mockText}</Button>)

    const button = screen.getByRole('button')

    await user.click(button)

    expect(spyOnClick).toHaveBeenCalled()
  })
})
