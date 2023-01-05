import { EncuestaResponse } from '../models/encuesta-response'

export interface EncuestaRepository {
  get(idProyecto: string): Promise<EncuestaResponse[]>
}
