import { BaseModel } from '../../common/base-model/base-model'
import { EncuestaEvalSec } from './encuesta-evalsec-request'
class EncuestaRequest extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEvaluacion: number = 0
  idEstado: string = ''
  idTipo: string = ''
  idUsuMod: number = 0
  listProyectoParticipanteEvalSec: EncuestaEvalSec[] = []
}
export { EncuestaRequest }
