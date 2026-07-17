import { apiClient } from '../utils/apiClient'

export const authService = {
  login(credentials) {
    return apiClient.post('/login', credentials)
  },
}