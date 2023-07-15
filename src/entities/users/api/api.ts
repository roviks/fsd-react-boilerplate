import { jsonApiInstance } from '@/shared/api/instances'
import { User } from './types'

export const routes = {
  users: '/users',
}

export const fetchUsers = () => {
  return jsonApiInstance.get<User[]>(routes.users)
}
