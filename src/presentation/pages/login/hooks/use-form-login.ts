import {
  AuthenticationRepository,
  ParticipanteResponse,
  UserRequest,
} from '@domain/authentication'
import { useContext, useEffect, useState } from 'react'
import { tileLogin } from '@presentation/constants'
import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'
import { useLogin } from '@main/adapters/authentication/use-login'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationFormLogin } from '@presentation/pages/login/hooks/use-validation-form'
import { useEncuestas } from '@main/adapters/encuesta/use-encuestas'
import { EncuestaRepository, EncuestaResponse } from '@domain/encuesta'

function useFormLogin(
  auth: AuthenticationRepository,
  encuesta: EncuestaRepository
) {
  const { listTypeDocs } = useContext(PostulacionesContext)
  const {
    isLoading: isLoadingEncuestas,
    isSuccess: isSuccessEncuesta,
    data: encuestas,
    mutate: mutateEncuesta,
  } = useEncuestas(encuesta)
  const {
    isLoading: isLoadingAuth,
    isSuccess: isSuccessAuth,
    data: dataAuth,
    error,
    mutate: mutateLogin,
  } = useLogin(auth)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(validationFormLogin),
    defaultValues: {
      idTipDoc: '',
      numDoc: '',
    },
  })

  const [maxLength, setMaxLength] = useState<number>(8)

  const { idTipDoc, numDoc } = watch()

  const { setTitle, setParticipante, setListEncuestas } =
    useContext(PostulacionesContext)

  const onSubmit = (data: any) => {
    mutateLogin(UserRequest.fromJson({ ...data }))
  }

  const handleDocument = (data: string) => {
    setValue('numDoc', data)
    clearErrors('numDoc')
  }

  useEffect(() => {
    if (isSuccessAuth) {
      setParticipante(dataAuth as ParticipanteResponse)
      //navigate('/evaluacion/home')
      mutateEncuesta(`${dataAuth?.idProyecto as number}`)
    }
  }, [isSuccessAuth])

  useEffect(() => {
    if (isSuccessEncuesta) {
      setListEncuestas(encuestas as EncuestaResponse[])
      navigate('/evaluacion/home')
    }
  }, [isSuccessEncuesta])

  useEffect(() => {
    if (idTipDoc !== '') {
      setValue('numDoc', '')
      //clearErrors('numDoc')
    }
  }, [idTipDoc])

  useEffect(() => {
    if (idTipDoc !== '00001') {
      setMaxLength(12)
    } else {
      setMaxLength(8)
    }
  }, [idTipDoc])

  useEffect(() => {
    setTitle(tileLogin)
  }, [])

  return {
    isLoading: isLoadingAuth || isLoadingEncuestas,
    tileLogin,
    handleSubmit,
    onSubmit,
    handleDocument,
    numDoc,
    maxLength,
    errors,
    control,
    listTypeDocs,
    error: error as string,
  }
}

export { useFormLogin }
