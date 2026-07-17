import { apiClient } from '../utils/apiClient'
import { ROUTES } from '../utils/constants'

export const authService = {
  login(credentials) {
    return apiClient.post(ROUTES.login, credentials)
  },
}