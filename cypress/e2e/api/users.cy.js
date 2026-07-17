import { usersService } from '../../services/users.service'
import { dataFactory } from '../../utils/dataFactory'

describe('Users API', () => {
  let user

  beforeEach(() => {
    user = dataFactory.user()
  })

  it('should create a new user successfully', () => {
    usersService.create(user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq(
        'Cadastro realizado com sucesso'
      )
      expect(response.body).to.have.property('_id')
    })
  })

  it('should not allow duplicated email registration', () => {
    usersService.create(user)

    usersService
      .create(user, {
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq(
          'Este email já está sendo usado'
        )
      })
  })

  it('should delete an existing user', () => {
    usersService.create(user).then((response) => {
      const userId = response.body._id

      usersService.delete(userId).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200)
        expect(deleteResponse.body.message).to.eq(
          'Registro excluído com sucesso'
        )
      })
    })
  })
})