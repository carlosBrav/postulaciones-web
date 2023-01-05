import { useMutation, useQuery } from '@tanstack/react-query'

import { EncuestaRepository, EncuestaRequest } from '@domain/encuesta'

const useCreateEncuesta = (repository: EncuestaRepository) => {
  const mutation = useMutation((encuesta: EncuestaRequest) =>
    repository.create(encuesta)
  )
  return mutation
}
export { useCreateEncuesta }
