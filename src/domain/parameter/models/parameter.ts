import { BaseModel } from '@domain/common/base-model/base-model'

class Parameter extends BaseModel {
  idParam: number = 0
  tipParam: string = ''
  codigo: string = ''
  descripcion: string = ''
  abreviatura: string = ''
}
export { Parameter }
