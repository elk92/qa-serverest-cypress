import { loginActions } from '../../actions/login.actions'

describe('Invalid Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display an error message when credentials are invalid', () => {
    loginActions.login(
      'usuario.invalido@email.com',
      'senha-incorreta'
    )

    cy.contains('Email e/ou senha inválidos')
      .should('be.visible')
  })
})