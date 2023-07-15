import { rest } from 'msw'

import { server } from '@/shared/api/mock-instance'
import { routes } from './api'

import { usersOkFixture, usersFailureFixture } from './fixtures'
import { JSONPLACEHOLDER_API_URL } from '@/shared/config'

const route = JSONPLACEHOLDER_API_URL + routes.users

export const fetchUsersMockOk = () => {
  server.use(
    rest.get(route, (_, response, context) => {
      return response(context.status(200), context.json(usersOkFixture))
    }),
  )

  return { usersOkFixture }
}

export const fetchUsersMockFailure = () => {
  server.use(
    rest.get(
      'https://jsonplaceholder.typicode.com/users',
      (_, response, context) => {
        return response(context.status(500))
      },
    ),
  )

  return { usersFailureFixture }
}
