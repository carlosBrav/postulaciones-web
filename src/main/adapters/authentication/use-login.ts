import { useMutation } from '@tanstack/react-query'

import { AuthenticationRepository } from '@domain/authentication'
import { UserRequest } from '@domain/authentication/models/user-request'

const useLogin = (repository: AuthenticationRepository) => {
  const mutation = useMutation((user: UserRequest) =>
    repository.login(user.usuario, user.clave)
  )
  return mutation
}
export { useLogin }
