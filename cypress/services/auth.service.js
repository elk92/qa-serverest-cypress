import { apiClient } from '../utils/apiClient'
import { ROUTES } from '../utils/constants'

export const authService = {
  login(credentials, options = {}) {
    return apiClient.post(
      ROUTES.login,
      credentials,
      options
    )
  },
}