import { authService } from '../../services/auth.service'
import { usersService } from '../../services/users.service'
import { dataFactory } from '../../utils/dataFactory'

describe('Authentication API', () => {
  let user

  before(() => {
    user = dataFactory.user()

    usersService.create(user)
  })

  it('should authenticate successfully with valid credentials', () => {
    authService
      .login({
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq(
          'Login realizado com sucesso'
        )
        expect(response.body.authorization).to.contain('Bearer')
      })
  })

  it('should not authenticate with invalid password', () => {
    authService
      .login(
        {
          email: user.email,
          password: 'senha-invalida',
        },
        {
          failOnStatusCode: false,
        }
      )
      .then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq(
          'Email e/ou senha inválidos'
        )
      })
  })
})