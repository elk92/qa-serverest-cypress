import { faker } from '@faker-js/faker'

export const dataFactory = {
  user() {
    return {
      nome: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: 'teste123',
      administrador: 'true',
    }
  },
}