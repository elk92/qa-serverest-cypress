export const apiClient = {
  get(url, options = {}) {
    return cy.request({
      method: 'GET',
      url,
      ...options,
    })
  },

  post(url, body, options = {}) {
    return cy.request({
      method: 'POST',
      url,
      body,
      ...options,
    })
  },

  delete(url, options = {}) {
    return cy.request({
      method: 'DELETE',
      url,
      ...options,
    })
  },
}