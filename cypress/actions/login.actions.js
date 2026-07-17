import { loginSelectors } from '../selectors/login.selectors'

export const loginActions = {
  fillEmail(email) {
    cy.get(loginSelectors.emailInput).type(email)
  },

  fillPassword(password) {
    cy.get(loginSelectors.passwordInput).type(password)
  },

  submit() {
    cy.get(loginSelectors.submitButton).click()
  },

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  },
}