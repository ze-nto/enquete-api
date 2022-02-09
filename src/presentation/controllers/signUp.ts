import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    let param = ''
    if (!httpRequest.body.name) {
      param = 'name'
    }

    if (!httpRequest.body.email) {
      param = 'email'
    }
    return {
      statusCode: 400,
      body: new Error(`Missing param: ${param}`)
    }
  }
}
