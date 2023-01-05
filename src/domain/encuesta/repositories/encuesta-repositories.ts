import { EncuestaPitchCreate, EncuestaRequest } from '../models'
import { EncuestaResponse } from '../models/encuesta-response'

export interface EncuestaRepository {
  get(idProyecto: string): Promise<EncuestaResponse[]>
  create(encuestaRequest: EncuestaRequest): Promise<boolean>
  createPitch(encuestaPitch: EncuestaPitchCreate): Promise<boolean>
}
