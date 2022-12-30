import { BaseModel } from '@domain/common/base-model/base-model'

class Criteria extends BaseModel {
  idCriterio: number = 0
  idTipoCalculo: string = ''
  tipParam: string = ''
  codigo: string = ''
  descripcion: string = ''
  peso: string = ''
  valor: string = ''
}

export { Criteria }
