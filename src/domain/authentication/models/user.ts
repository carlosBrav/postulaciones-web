import { BaseModel } from '@domain/common/base-model/base-model'

class User extends BaseModel {
  idUsuario: number = 0
  idPerfil: number = 0
  idTipDoc: string = ''
  numDoc: string = ''
  codigo: string = ''
  nombre: string = ''
  apePat: string = ''
  apeMat: string = ''
  email: string = ''
  celular: string = ''
  foto: string = ''
  clave: string = ''
  login: string = ''
  dscPerfil: string = ''
  dscTipDoc: string = ''
  fotoURL: string = ''
  nomCompleto: string = ''
}
export { User }
