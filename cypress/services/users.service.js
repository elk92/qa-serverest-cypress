import { apiClient } from '../utils/apiClient'
import { ROUTES } from '../utils/constants'

export const usersService = {
  create(user, options = {}) {
    return apiClient.post(ROUTES.users, user, options)
  },

  list() {
    return apiClient.get(ROUTES.users)
  },

  get(id) {
    return apiClient.get(`${ROUTES.users}/${id}`)
  },

  delete(id, options = {}) {
    return apiClient.delete(`${ROUTES.users}/${id}`, options)
  },
}