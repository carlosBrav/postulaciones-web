import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse
} from '@core/http/http-client'

import { AuthenticationProvider } from '@domain/authentication'

export class AuthProvider implements AuthenticationProvider {
  private readonly msName = '/authUsuario'
  constructor(private _httpClient: HttpClient) {
  }

  login(
    user: string,
    pass: string,
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}`,
      method: HttpMethod.POST,
      body: {
        login: user,
        clave: pass
      },
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  
}
