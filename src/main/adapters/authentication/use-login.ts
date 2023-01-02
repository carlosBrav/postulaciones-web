import { useMutation } from '@tanstack/react-query'

import { AuthenticationRepository, UserRequest } from '@domain/authentication'

const useLogin = (repository: AuthenticationRepository) => {
  const mutation = useMutation((user: UserRequest) =>
    repository.login(user.idTipDoc, user.numDoc)
  )
  return mutation
}
export { useLogin }
