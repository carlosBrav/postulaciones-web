export class UnexpectedError extends Error {
  constructor() {
    super('Algo ocurrió. Intente nuevamente mas tarde')
    this.name = 'UnexpectedError'
  }
}
