import { createBrowserRouter } from 'react-router-dom'

import { routes } from '@/shared/routes'

import { WelcomePage } from './welcome'

export const router = createBrowserRouter([
  {
    path: routes.WELCOME,
    element: <WelcomePage />,
  },
])
