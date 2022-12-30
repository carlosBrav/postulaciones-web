import React from "react";
import { ResponseForm } from '@domain/response/model/response-form'
import {Selector} from '@domain/common/selector'

export type PostulacionesStateType = {
  step: number
  title: string
  response: ResponseForm[]
  file: File | null
  listTypeDocs: Selector[]
  setTitle: (title: string) => void
  addStep: () => void
  backStep: () => void
  setResponse: (responses: ResponseForm[]) => void
  setFile: (file: File | null) => void
}

export const defaultState = {
  file: null,
  title: '',
  step: 1,
  response: [],
  listTypeDocs: [],
  setTitle: () => {},
  addStep: () => {},
  backStep: () => {},
  setResponse: () => {},
  setFile: ()  =>  {},
}

export const PostulacionesContext =
	React.createContext<PostulacionesStateType>(
		defaultState
	);
