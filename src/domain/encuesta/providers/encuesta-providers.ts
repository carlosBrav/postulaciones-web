import { HttpResponse } from '@core/http/http-client'
import { EncuestaPitchCreate, EncuestaRequest } from '../models'

export interface EncuestaProvider {
  get(idProyecto: string): Promise<HttpResponse<Record<string, unknown>>>
  create(
    encuestaCreate: EncuestaRequest
  ): Promise<HttpResponse<Record<string, unknown>>>
  createPitch(
    pitchCreate: EncuestaPitchCreate
  ): Promise<HttpResponse<Record<string, unknown>>>
}
