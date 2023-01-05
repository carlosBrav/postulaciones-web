import { useMutation, useQuery } from '@tanstack/react-query'

import { EncuestaRepository, EncuestaPitchCreate } from '@domain/encuesta'

const useCreatePitch = (repository: EncuestaRepository) => {
  const mutation = useMutation((encuesta: EncuestaPitchCreate) =>
    repository.createPitch(encuesta)
  )
  return mutation
}
export { useCreatePitch }
