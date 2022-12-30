import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { UnexpectedError } from '@domain/parameter/errors'
import { Criteria, Parameter } from '../models'
import {ObservableInput} from 'rxjs'

export class ParameterMapping {
  toError = (error: HttpError): any => {
    switch (error.statusCode) {
      case 401:
        return new UnexpectedError()
      default:
        return new UnexpectedError()
    }
  }

  toParameters = (json: Record<string, unknown>[]): Parameter[] => {
    const { listParametro } = json as any
    return listParametro.map((val: any) => Parameter.fromJson({ ...val }))
  }

  toCriteria = (json: Record<string, unknown>[]): Criteria[] => {
    const { listCriterio } = json as any
    return listCriterio.map((val: any) => Criteria.fromJson({ ...val }))
  }
}
