import { AuthenticationRepository, UserRequest } from '@domain/authentication'
import { useContext, useEffect } from 'react'
import { tileLogin } from '@presentation/constants'
import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'
import { useLogin } from '@main/adapters/authentication/use-login'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationFormLogin } from '@presentation/pages/login/hooks/use-validation-form'

function useFormLogin(auth: AuthenticationRepository) {
  const { listTypeDocs } = useContext(PostulacionesContext)
  const {
    isLoading: isLoadingAuth,
    isSuccess: isSuccessAuth,
    mutate: mutateLogin,
  } = useLogin(auth)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFormLogin),
    defaultValues: {
      idTipDoc: '',
      numDoc: '',
    },
  })
  const { setTitle } = useContext(PostulacionesContext)

  const onSubmit = (data: any) => {
    mutateLogin(UserRequest.fromJson({ ...data }))
  }

  useEffect(() => {
    if (isSuccessAuth) {
      navigate('/evaluacion/home')
    }
  }, [isSuccessAuth])

  useEffect(() => {
    setTitle(tileLogin)
  }, [])

  return {
    isLoadingAuth,
    tileLogin,
    handleSubmit,
    onSubmit,
    control,
    listTypeDocs,
  }
}

export { useFormLogin }
