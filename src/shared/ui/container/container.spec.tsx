import { render, screen } from '@testing-library/react'

import { Container } from './container'

describe('Container component', () => {
  it('should render correctly', () => {
    const text = 'test'

    render(<Container>{text}</Container>)

    const element = screen.getByText(text)

    expect(element).toBeInTheDocument()
  })

  it('should correctly render div inside the container', () => {
    const text = 'test'

    render(
      <Container>
        <div>{text}</div>
      </Container>,
    )

    const element = screen.getByText(text)

    expect(element).toBeInTheDocument()
  })
})
