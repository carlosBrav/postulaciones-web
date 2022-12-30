export type HttpRequest<T> = {
  url: string
  method: HttpMethod
  body?: T
  headers?: Record<string, unknown>
}

export interface HttpClient<T = unknown, R = unknown> {
  request: (data: HttpRequest<T>) => Promise<HttpResponse<R>>
  getPrivateHeader: () => Record<string, string>
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<R = unknown> = {
  statusCode: HttpStatusCode
  body: R
}
