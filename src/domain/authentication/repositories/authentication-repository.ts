import { ParticipanteResponse } from '@domain/authentication'
export interface AuthenticationRepository {
  login(idTipDoc: string, numDoc: string): Promise<ParticipanteResponse>
}
