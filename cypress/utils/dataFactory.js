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

  product() {
    return {
      nome: faker.commerce.productName(),
      preco: Number(
        faker.commerce.price({
          min: 50,
          max: 1000,
          dec: 0,
        })
      ),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({
        min: 1,
        max: 100,
      }),
    }
  },
}