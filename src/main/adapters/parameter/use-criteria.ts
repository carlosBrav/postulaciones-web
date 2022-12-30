import { useQuery } from '@tanstack/react-query'

import { ParameterRepository } from '@domain/parameter'

const useCriteria = (
  typeCalculo: string,
  typeCriteria: string,
  repository: ParameterRepository
) => {
  return useQuery([`parameters-criteria-${typeCalculo}-${typeCriteria}`], () =>
    repository.getAllCriteria(typeCalculo, typeCriteria)
  )
}
export default useCriteria
