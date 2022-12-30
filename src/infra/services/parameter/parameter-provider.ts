import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { ParameterProvider } from '@domain/parameter'

export class ParameterService implements ParameterProvider {
  private readonly msName = 'getParametro'
  private readonly msNameCriteria = './getCriterio'
  constructor(private _httpClient: HttpClient) {}

  getAllCriteria(
    typeCalculo: string,
    typeParam: string
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCriteria}?idTipoCalculo=${typeCalculo}&tipParam=${typeParam}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }

  getAll(type_param: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}?tipParam=${type_param}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
}
