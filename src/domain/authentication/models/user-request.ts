import { BaseModel } from '../../common/model/base-model'

class UserRequest extends BaseModel {
  usuario: string = ''
  clave: string = ''
}
export { UserRequest }
