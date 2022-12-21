import React from "react";

export type PostulacionesStateType = {
  step: number
  title: string
  setTitle: (title: string)=> void
  addStep: ()=> void
  backStep: ()=> void
};



export const defaultState = {
  title: '',
  step: 1,
  setTitle: (title: string)=> {},
  addStep:()=> {},
  backStep: ()=> {},
};

export const PostulacionesContext =
	React.createContext<PostulacionesStateType>(
		defaultState
	);
