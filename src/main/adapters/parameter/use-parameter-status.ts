import { useQuery } from '@tanstack/react-query'

import { ParameterRepository } from '@domain/parameter/repositories'
import { TYPE_PARAMETER } from '@domain/parameter/constants'

const useParameterStatus = (repository: ParameterRepository) => {
  return useQuery(['parameters-status'], () =>
    repository.getAll(TYPE_PARAMETER.estado_proyecto)
  )
}
export { useParameterStatus }
