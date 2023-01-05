import { BaseModel } from '../../common/base-model/base-model'

class EncuestaPitchCreate extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEvaluacion: number = 0
  idEstado: string = ''
  idTipo: string = ''
  score: number = 0
  idUsuMod: number = 0
  videoBase64: string = ''
}
export { EncuestaPitchCreate }
