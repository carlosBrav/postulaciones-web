import {User} from '@domain/authentication/models/user'
export interface AuthenticationRepository {
  login(user: string, pass: string): Promise<User>
}
