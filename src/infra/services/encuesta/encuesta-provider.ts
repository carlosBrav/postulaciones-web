import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { EncuestaProvider } from '@domain/encuesta'

export class EncuestaServiceProvider implements EncuestaProvider {
  private readonly msName = '/getEvaluacion?idProyecto='
  constructor(private _httpClient: HttpClient) {}

  get(idProyecto: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}${idProyecto}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
}
