import React from "react";
import { ResponseForm } from '@domain/response/model/response-form'
import {Selector} from '@domain/common/selector'
import { ParticipanteResponse } from '@domain/authentication'
import { EncuestaResponse } from "@domain/encuesta";
import { EncuestaIndicador } from '@domain/encuesta/models/encuesta-indicador'

export type PostulacionesStateType = {
  step: number
  title: string
  response: ResponseForm[]
  file: File | null
  listTypeDocs: Selector[]
  listEncuestas: EncuestaResponse[]
  idSections: number[]
  stepsSpitch: number
  stepsEntrevista: number
  setStepsEntrevista: (data: number) => void
  setStepsSpitch: (data: number) => void
  setIdSections: (data: number[]) => void
  setListEncuestas: (data: EncuestaResponse[]) => void
  setTitle: (title: string) => void
  addStep: () => void
  backStep: () => void
  setResponse: (responses: ResponseForm[]) => void
  setFile: (file: File | null) => void
  participante: ParticipanteResponse | null
  setParticipante: (data: ParticipanteResponse) => void
  indicadores: EncuestaIndicador[]
  setIndicadores: (data: EncuestaIndicador[]) => void
}

export const defaultState = {
  file: null,
  title: '',
  step: 1,
  response: [],
  listTypeDocs: [],
  participante: null,
  listEncuestas: [],
  indicadores: [],
  idSections: [],
  stepsSpitch: 0,
  stepsEntrevista: 0,
  setStepsEntrevista: () => {},
  setStepsSpitch: () => {},
  setIdSections: () => {},
  setIndicadores: () => {},
  setListEncuestas: () => {},
  setTitle: () => {},
  addStep: () => {},
  backStep: () => {},
  setResponse: () => {},
  setFile: () => {},
  setParticipante: () => {},
}

export const PostulacionesContext =
	React.createContext<PostulacionesStateType>(
		defaultState
	);
