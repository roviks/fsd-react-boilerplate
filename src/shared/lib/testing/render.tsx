import { FC, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

interface Props {
  children: ReactNode
  initialEntries?: string[]
}

const Providers: FC<Props> = ({ children, initialEntries }) => {
  return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
}

type Options = Omit<RenderOptions, 'wrapper'>

export const renderWithProviders = (
  ui: ReactElement,
  props?: Omit<Props, 'children'>,
  options?: Options,
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Providers initialEntries={props?.initialEntries}>{children}</Providers>
    ),
    ...options,
  })
