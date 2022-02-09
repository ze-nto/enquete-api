import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    let paramName = ''
    if (!httpRequest.body.name) {
      paramName = 'name'
    }

    if (!httpRequest.body.email) {
      paramName = 'email'
    }
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }
}
