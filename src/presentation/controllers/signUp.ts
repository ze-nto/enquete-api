import { MissingParamError } from '../errors/missing-param-error'
import { BadRequest } from '../helpers/http-helper'
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
    return BadRequest(new MissingParamError(paramName))
  }
}
