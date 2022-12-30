import {AuthenticationUseCase} from '@domain/authentication/usecases/authentication-usecase'
import {AuthProvider} from '@infra/services/authentication/authentication-provider'
import {AuthenticationMapping} from '@domain/authentication/mappings/authentication-mapping'
import { httpClient } from '@main/factories/http-factory'


export const AuthenticationFactory: AuthenticationUseCase = new AuthenticationUseCase(
  new AuthProvider(httpClient),
  new AuthenticationMapping()
)