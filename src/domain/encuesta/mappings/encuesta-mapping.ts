import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'

import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError,
} from '@domain/encuesta'
import { EncuestaResponse } from '../models'

class EncuestaMapping {
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
    } else {
      throw new UnexpectedError()
    }
  }

  toEncuestas = (json: Record<string, unknown>[]): EncuestaResponse[] => {
    const { listEvaluacion } = json as any
    return listEvaluacion.map((val: any) =>
      EncuestaResponse.fromJson({ ...val })
    )
  }
}

export { EncuestaMapping }
