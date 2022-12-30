import { HttpClient } from 'core/http/http-client'

import { AxiosHttpClient } from '@infra/http/axios-http-client'

export const httpClient: HttpClient = new AxiosHttpClient(
  import.meta.env.VITE_APP_SERVER_URL
)
