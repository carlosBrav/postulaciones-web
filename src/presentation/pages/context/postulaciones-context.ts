import React from "react";
import { ResponseForm } from '@domain/response/model/response-form'
import {Selector} from '@domain/common/selector'
import { ParticipanteResponse } from '@domain/authentication'
import { EncuestaResponse } from "@domain/encuesta";

export type PostulacionesStateType = {
  step: number
  title: string
  response: ResponseForm[]
  file: File | null
  listTypeDocs: Selector[]
  listEncuestas: EncuestaResponse[]
  setListEncuestas: (data: EncuestaResponse[]) => void
  setTitle: (title: string) => void
  addStep: () => void
  backStep: () => void
  setResponse: (responses: ResponseForm[]) => void
  setFile: (file: File | null) => void
  participante: ParticipanteResponse | null
  setParticipante: (data: ParticipanteResponse) => void
}

export const defaultState = {
  file: null,
  title: '',
  step: 1,
  response: [],
  listTypeDocs: [],
  participante: null,
  listEncuestas: [],
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
