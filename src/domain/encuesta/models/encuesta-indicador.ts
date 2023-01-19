import { BaseModel } from '../../common/base-model/base-model'

class EncuestaIndicador extends BaseModel {
  idIndicador: number = 0
  idSeccion: number = 0
  descripcion: string = ''
  orden: number = 0
  dscSeccion: string = ''
  index: number = 0
  respuesta: number = 1
}

export { EncuestaIndicador }
