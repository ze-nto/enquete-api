import { SignUpController } from './signUp'

describe('SignUp Controller ', () => {
  test('Should return 400 if no name is provided', () => {
    // SUT define a classe que está sendo testada
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConnfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
