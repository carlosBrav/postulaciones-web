import {ParameterUseCase} from '@domain/parameter/usecase/parameter-usecase'
import {ParameterService} from '@infra/services/parameter/parameter-provider'
import {ParameterMapping} from '@domain/parameter/mappings'
import { httpClient } from '@main/factories/http-factory'


export const ParameterFactory: ParameterUseCase = new ParameterUseCase(
  new ParameterService(httpClient),
  new ParameterMapping()
)