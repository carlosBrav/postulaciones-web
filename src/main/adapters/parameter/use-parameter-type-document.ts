import { useQuery } from '@tanstack/react-query'

import { ParameterRepository } from '@domain/parameter/repositories'
import { TYPE_PARAMETER } from '@domain/parameter/constants'

const useParameter = (repository: ParameterRepository) => {
  return useQuery(['parameters'], () =>
    repository.getAll(TYPE_PARAMETER.type_document)
  )
}
export { useParameter }
