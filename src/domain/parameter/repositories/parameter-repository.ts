import {Parameter} from '@domain/parameter/models'
import { Criteria } from '@domain/parameter'
export interface ParameterRepository {
  getAll(types_param: string): Promise<Parameter[]>
  getAllCriteria(typeCalculo: string, typeParam: string): Promise<Criteria[]>
}
