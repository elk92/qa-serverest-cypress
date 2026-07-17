import { apiClient } from '../utils/apiClient'
import { ROUTES } from '../utils/constants'

export const productsService = {
  create(product, token, options = {}) {
    return apiClient.post(
      ROUTES.products,
      product,
      {
        headers: {
          Authorization: token,
        },
        ...options,
      }
    )
  },

  list() {
    return apiClient.get(ROUTES.products)
  },

  delete(id, token, options = {}) {
    return apiClient.delete(
      `${ROUTES.products}/${id}`,
      {
        headers: {
          Authorization: token,
        },
        ...options,
      }
    )
  },
}