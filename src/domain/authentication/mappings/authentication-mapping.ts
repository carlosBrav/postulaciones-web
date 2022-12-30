import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'

import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'
import { User } from '../models'

export class AuthenticationMapping {
  toError = (error: Error): any => {
    if (error instanceof HttpError) {
      switch (error.statusCode) {
        case HttpStatusCode.unauthorized:
          return new InvalidCredentialsError()
        case HttpStatusCode.forbidden:
          return new AccessDeniedError()
        default:
          return new UnexpectedError()
      }
    }else {
      throw new UnexpectedError()
    }
    
  }

  toUser = (json: Record<string, unknown>[]): User => {
    const {usuario} = json as any
    return User.fromJson(usuario)
  }
}
