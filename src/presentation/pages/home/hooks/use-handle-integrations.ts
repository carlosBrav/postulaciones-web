import { useCreateEncuesta } from '@main/adapters/encuesta/use-create-encuesta'
import { EncuestaRepository } from '@domain/encuesta'
import { useCreatePitch } from '@main/adapters/encuesta/use-create-pitch'

function useHandleIntegrations(encuesta: EncuestaRepository) {
  const {
    isLoading: isLoadingCreateEncuesta,
    isSuccess: isSuccessCeateEncuesta,
    mutate: mutateCreateEncuesta,
  } = useCreateEncuesta(encuesta)

  const {
    isLoading: isLoadingCreatePitch,
    isSuccess: isSuccessCreatePitch,
    mutate: mutateCreatePitch,
  } = useCreatePitch(encuesta)

  return {
    isLoadingCreateEncuesta,
    isSuccessCeateEncuesta,
    mutateCreateEncuesta,
    isLoadingCreatePitch,
    isSuccessCreatePitch,
    mutateCreatePitch,
  }
}

export { useHandleIntegrations }
