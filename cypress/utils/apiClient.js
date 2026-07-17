export const apiClient = {
  get(url, options = {}) {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}${url}`,
      ...options,
    })
  },

  post(url, body, options = {}) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}${url}`,
      body,
      ...options,
    })
  },

  put(url, body, options = {}) {
    return cy.request({
      method: 'PUT',
      url: `${Cypress.env('apiUrl')}${url}`,
      body,
      ...options,
    })
  },

  delete(url, options = {}) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}${url}`,
      ...options,
    })
  },
}