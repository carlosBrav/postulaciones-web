import { BaseModel } from '@domain/common/base-model/base-model'

class ResponseForm extends BaseModel {
  value: string = ''
  label: string = ''
  id: string = ''
}

export { ResponseForm }
