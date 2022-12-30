import { HttpResponse } from '@core/http/http-client'

export interface AuthenticationProvider {
  login(user: string, pass: string): Promise<HttpResponse<Record<string, unknown>>>
}
