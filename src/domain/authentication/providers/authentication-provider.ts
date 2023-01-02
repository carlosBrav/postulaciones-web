import { HttpResponse } from '@core/http/http-client'

export interface AuthenticationProvider {
  login(
    idTipDoc: string,
    numDoc: string
  ): Promise<HttpResponse<Record<string, unknown>>>
}
