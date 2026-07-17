import { dataFactory } from '../../utils/dataFactory'
import { registerActions } from '../../actions/register.actions'

describe('User Registration', () => {
  let user

  beforeEach(() => {
    user = dataFactory.user()

    cy.visit('/admin/cadastrarusuarios')
  })

  it('should register a new administrator successfully', () => {
    registerActions.register(user)

    cy.url().should('include', '/admin/listarusuarios')

    cy.contains(user.nome).should('be.visible')
  })
})