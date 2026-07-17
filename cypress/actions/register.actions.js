import { registerSelectors } from '../selectors/register.selectors'

export const registerActions = {
  fillName(name) {
    cy.get(registerSelectors.nameInput).type(name)
  },

  fillEmail(email) {
    cy.get(registerSelectors.emailInput).type(email)
  },

  fillPassword(password) {
    cy.get(registerSelectors.passwordInput).type(password)
  },

  selectAdministrator() {
    cy.get(registerSelectors.adminCheckbox).check()
  },

  submit() {
    cy.get(registerSelectors.submitButton).click()
  },

  register(user) {
    this.fillName(user.nome)
    this.fillEmail(user.email)
    this.fillPassword(user.password)
    this.selectAdministrator()
    this.submit()
  },
}