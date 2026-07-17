import { loginActions } from '../../actions/login.actions'
import { registerActions } from '../../actions/register.actions'
import { usersService } from '../../services/users.service'
import { dataFactory } from '../../utils/dataFactory'

describe('User Registration', () => {
  let adminUser
  let newUser

  beforeEach(() => {
    adminUser = dataFactory.user()
    newUser = dataFactory.user()

    usersService.create(adminUser)

    cy.visit('/')

    loginActions.login(
      adminUser.email,
      adminUser.password
    )

    cy.url().should('include', '/admin/home')

    cy.visit('/admin/cadastrarusuarios')
  })

  it('should register a new administrator successfully', () => {
    registerActions.register(newUser)

    cy.url().should('include', '/admin/listarusuarios')

    cy.contains(newUser.nome).should('be.visible')
  })
})