import { EncuestaUseCase, EncuestaMapping } from '@domain/encuesta'
import { EncuestaServiceProvider } from '@infra/services/encuesta/encuesta-provider'
import { httpClient } from '@main/factories/http-factory'

export const EncuestaFactory: EncuestaUseCase = new EncuestaUseCase(
  new EncuestaServiceProvider(httpClient),
  new EncuestaMapping()
)
