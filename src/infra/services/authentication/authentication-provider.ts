import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { AuthenticationProvider } from '@domain/authentication'

export class AuthProvider implements AuthenticationProvider {
  private readonly msName = '/authParticipante'
  constructor(private _httpClient: HttpClient) {}

  login(
    idTipDoc: string,
    numDoc: string
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}`,
      method: HttpMethod.POST,
      body: {
        idTipDoc,
        numDoc,
      },
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
}
