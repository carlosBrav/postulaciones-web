import React, { HTMLProps, useEffect, useState } from 'react'
import { PostulacionesContext } from './postulaciones-context'
import { ResponseForm } from '@domain/response/model/response-form'
import {useParameter} from '@main/adapters/parameter/use-parameter-type-document'
import { ParameterRepository } from '@domain/parameter'
import {Selector} from '@domain/common/selector'
import { ParticipanteResponse } from '@domain/authentication'
import { EncuestaResponse } from '@domain/encuesta'

type Props = {
  parameterRepository: ParameterRepository
} & HTMLProps<HTMLDivElement>

function PostulacionesProvider({ parameterRepository, children }: Props) {
  const [step, setStep] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [response, setResponse] = useState<ResponseForm[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [listTypeDocs, setListTypeDocs] = useState<Selector[]>([])
  const [participante, setParticipante] = useState<ParticipanteResponse | null>(
    null
  )
  const [listEncuestas, setListEncuestas] = useState<EncuestaResponse[]>([])
  const {data: dataTypeDocs, isSuccess: isSuccessTypeDocs,} = useParameter(parameterRepository)

  const addStep = () => {
    setStep(step+1)
  }

  const backStep = () => {
    setStep(step-1)
  }

  useEffect(()=>{
    if(isSuccessTypeDocs){
      setListTypeDocs(dataTypeDocs?.map((val)=> Selector.fromJson({
        value: val.codigo,
        label: val.descripcion
      })) as Selector[])
    }
  },[isSuccessTypeDocs])

  return (
    <PostulacionesContext.Provider
      value={{
        listEncuestas,
        file,
        step,
        title,
        response,
        listTypeDocs,
        participante,
        setListEncuestas,
        setParticipante,
        setFile,
        setResponse,
        addStep,
        backStep,
        setTitle,
      }}
    >
      {children}
    </PostulacionesContext.Provider>
  )
}

export { PostulacionesProvider }
