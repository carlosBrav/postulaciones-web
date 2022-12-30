import axios, { AxiosError, AxiosResponse } from 'axios'

import { HttpError } from '@core/http/errors/http-error'
import { HttpClient, HttpRequest, HttpResponse } from '@core/http/http-client'

export class AxiosHttpClient implements HttpClient {
  constructor(private baseUrl = '') {}

  private isAbsoluteUrl = (url: string): boolean => {
    const path = /^https?:\/\//i
    return path.test(url)
  }

  private getUrl = (url: string) => {
    if (this.isAbsoluteUrl(url)) return url
    return `${this.baseUrl}/${url}`
  }

  getPrivateHeader() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      KEYID: import.meta.env.VITE_APP_KEY,
    }
  }

  async request<T = unknown, R = unknown>(
    data: HttpRequest<T>
  ): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse<R, Error>
    try {
      axiosResponse = await axios.request<T, AxiosResponse<R, Error>>({
        url: this.getUrl(data.url),
        method: data.method,
        data: data.body,
        headers: data.headers as Partial<any>,
      })
    } catch (error) {
      const { response } = error as AxiosError
      throw new HttpError(response?.status ?? -1, response?.data, '')
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
