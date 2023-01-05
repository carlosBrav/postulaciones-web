import { BaseModel } from '../../common/base-model/base-model'
import { EncuestaEvalSecInd } from './encuesta-evalsecind-request'

class EncuestaEvalSec extends BaseModel {
  idSeccion: number = 0
  factor: number = 0
  listProyectoParticipanteEvalSecInd: EncuestaEvalSecInd[] = []
}

export { EncuestaEvalSec }
