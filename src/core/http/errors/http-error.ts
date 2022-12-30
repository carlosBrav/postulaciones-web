export class HttpError extends Error {
  constructor(
    public statusCode: number,
    public body: unknown,
    public message: string
  ) {
    super('Ocurrio un error al solicitar el servicio')
    this.name = 'HttpError'
  }
}
