import { BaseModel } from '../../common/base-model/base-model'
import { EncuestaSeccion } from './encuesta-seccion'
class EncuestaResponse extends BaseModel {
  idEvaluacion: number = 0
  idTipo: string = ''
  descripcion: string = ''
  dscTipo: string = ''
  indicaciones: string = ''
  listSeccion: EncuestaSeccion[] = []
}

export { EncuestaResponse }
