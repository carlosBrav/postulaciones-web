import { HttpResponse } from '@core/http/http-client'

export interface EncuestaProvider {
  get(idProyecto: string): Promise<HttpResponse<Record<string, unknown>>>
}
