import { loginActions } from '../../actions/login.actions'
import { usersService } from '../../services/users.service'
import { dataFactory } from '../../utils/dataFactory'

describe('Authentication', () => {
  let user

  before(() => {
    user = dataFactory.user()

    usersService.create(user).then((response) => {
      expect(response.status).to.eq(201)
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully with a valid user', () => {
    loginActions.login(user.email, user.password)

    cy.url().should('include', '/admin/home')

    cy.contains(`Bem Vindo ${user.nome}`).should('be.visible')
  })
})