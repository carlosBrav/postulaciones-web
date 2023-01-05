import { useMutation, useQuery } from '@tanstack/react-query'

import { EncuestaRepository } from '@domain/encuesta'

const useEncuestas = (repository: EncuestaRepository) => {
  const mutation = useMutation((idProyecto: string) =>
    repository.get(idProyecto)
  )
  return mutation
}
export { useEncuestas }
