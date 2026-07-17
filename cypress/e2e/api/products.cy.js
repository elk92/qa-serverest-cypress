import { authService } from '../../services/auth.service'
import { productsService } from '../../services/products.service'
import { usersService } from '../../services/users.service'
import { dataFactory } from '../../utils/dataFactory'

describe('Products API', () => {
  let user
  let token
  let product

  before(() => {
    user = dataFactory.user()

    usersService.create(user)

    authService
      .login({
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        token = response.body.authorization
      })
  })

  beforeEach(() => {
    product = dataFactory.product()
  })

  it('should create a product successfully', () => {
    productsService.create(product, token).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq(
        'Cadastro realizado com sucesso'
      )

      expect(response.body).to.have.property('_id')

    })
  })

  it('should not allow duplicated product name', () => {
    productsService.create(product, token)

    productsService
      .create(product, token, {
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq(
          'Já existe produto com esse nome'
        )
      })
  })

  it('should not create product without authentication', () => {
    productsService
      .create(product, '', {
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.contain(
          'Token de acesso'
        )
      })
  })

  it('should delete a product successfully', () => {
    productsService.create(product, token).then((response) => {
      const id = response.body._id

      productsService.delete(id, token).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200)
        expect(deleteResponse.body.message).to.eq(
          'Registro excluído com sucesso'
        )
      })
    })
  })
})