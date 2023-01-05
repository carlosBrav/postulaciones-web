import { catchError, map, firstValueFrom, from, Observable } from 'rxjs'

import {
  EncuestaProvider,
  EncuestaMapping,
  EncuestaResponse,
  EncuestaRepository,
} from '@domain/encuesta'
import { EncuestaPitchCreate, EncuestaRequest } from '../models'

class EncuestaUseCase implements EncuestaRepository {
  constructor(
    public encuesta_provider: EncuestaProvider,
    private _encuestaMapping: EncuestaMapping // eslint-disable-next-line no-empty-function
  ) {}
  createPitch(encuestaPitch: EncuestaPitchCreate): Promise<boolean> {
    const source$ = from(
      this.encuesta_provider.createPitch(encuestaPitch)
    ).pipe(
      map((response: any) => !!response.body),
      //map(this._encuestaMapping.toEncuestas),
      catchError((error: Error) => this._encuestaMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  create(encuestaRequest: EncuestaRequest): Promise<boolean> {
    const source$ = from(this.encuesta_provider.create(encuestaRequest)).pipe(
      map((response: any) => !!response.body),
      //map(this._encuestaMapping.toEncuestas),
      catchError((error: Error) => this._encuestaMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }
  get(idProyecto: string): Promise<EncuestaResponse[]> {
    const source$ = from(this.encuesta_provider.get(idProyecto)).pipe(
      map((response: any) => response.body),
      map(this._encuestaMapping.toEncuestas),
      catchError((error: Error) => this._encuestaMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<EncuestaResponse[]>
  }
}

export { EncuestaUseCase }
