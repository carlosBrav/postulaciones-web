import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { Observable, throwError } from 'rxjs'
import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'
import { ParticipanteResponse, User } from '../models'

export class AuthenticationMapping {
  toError = (error: Error): any => {
    if (error instanceof HttpError) {
      const { mensaje } = error.body as any
      switch (error.statusCode) {
        case HttpStatusCode.unauthorized:
          return throwError('Credenciales inválidas')
        case HttpStatusCode.forbidden:
          return throwError('Acceso denegado')
        case HttpStatusCode.serverError:
          return throwError(mensaje.descripcion as string)
        default:
          return throwError('Ocurrió un error desconocido')
      }
    } else {
      return throwError('Ocurrió un error desconocido')
    }
  }

  toUser = (json: Record<string, unknown>[]): ParticipanteResponse => {
    const { usuario } = json as any
    return ParticipanteResponse.fromJson(usuario)
  }
}
