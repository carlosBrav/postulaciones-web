import { ResponseForm } from '@domain/response/model/response-form'

function useGenerateResponse() {
  const transformToResponseType = (data: any): ResponseForm[] => {
    return data.map((val: any, index: number) =>
      ResponseForm.fromJson({
        value: `0`,
        label: `pregunta${index + 1}`,
        id: `${val.id}`,
      })
    )
  }

  return {
    transformToResponseType,
  }
}

export default useGenerateResponse
