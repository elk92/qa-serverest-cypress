import { apiClient } from '../utils/apiClient'
import { ROUTES } from '../utils/constants'

export const usersService = {
  create(user) {
    return apiClient.post(ROUTES.users, user)
  },

  delete(id) {
    return apiClient.delete(`${ROUTES.users}/${id}`)
  },
}