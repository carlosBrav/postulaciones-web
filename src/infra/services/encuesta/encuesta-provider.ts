import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { EncuestaPitchCreate, EncuestaProvider, EncuestaRequest } from '@domain/encuesta'

export class EncuestaServiceProvider implements EncuestaProvider {
  private readonly msName = '/getEvaluacion?idProyecto='
  private readonly msNameGuardarEncuesta = '/setProyectoParticipanteEval'
  constructor(private _httpClient: HttpClient) {}

  createPitch(pitchCreate: EncuestaPitchCreate): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameGuardarEncuesta}`,
      method: HttpMethod.POST,
      body: pitchCreate.toJson(),
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
  
  create(encuestaCreate: EncuestaRequest): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameGuardarEncuesta}`,
      method: HttpMethod.POST,
      body: encuestaCreate.toJson(),
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }

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
