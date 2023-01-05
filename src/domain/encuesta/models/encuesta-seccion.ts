import { BaseModel } from '../../common/base-model/base-model'
import { EncuestaIndicador } from './encuesta-indicador'

class EncuestaSeccion extends BaseModel {
  idSeccion: number = 0
  idEvaluacion: number = 0
  descripcion: string = ''
  correccion: number = 0
  dscEvaluacion: string = ''
  listIndicador: EncuestaIndicador[] = []
}

export { EncuestaSeccion }
