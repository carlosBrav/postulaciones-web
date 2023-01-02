import { catchError, map, firstValueFrom, from, Observable } from 'rxjs'

import { AuthenticationProvider } from '@domain/authentication/providers'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'
import {
  AuthenticationMapping,
  ParticipanteResponse,
} from '@domain/authentication'


export class AuthenticationUseCase implements AuthenticationRepository {
  constructor(
    public auth: AuthenticationProvider,
    private _authMapping: AuthenticationMapping // eslint-disable-next-line no-empty-function
  ) {}

  login = (idTipDoc: string, numDoc: string): Promise<ParticipanteResponse> => {
    const source$ = from(this.auth.login(idTipDoc, numDoc)).pipe(
      map((response: any) => response.body),
      map(this._authMapping.toUser),
      catchError((error: Error) => this._authMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<ParticipanteResponse>
  }
}
