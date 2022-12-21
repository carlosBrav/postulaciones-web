import React, { HTMLProps, useEffect, useState } from 'react'
import { PostulacionesContext } from './postulaciones-context'
type Props = {
  test?: string
} & HTMLProps<HTMLDivElement>

function PostulacionesProvider({ test = '', children }: Props) {
  const [step, setStep] = useState<number>(1)
  const [title, setTitle] = useState<string>('')

  const addStep = () => {
    setStep(step+1)
  }

  const backStep = () => {
    setStep(step-1)
  }

  return (
    <PostulacionesContext.Provider
      value={{
        step,
        title,
        addStep,
        backStep,
        setTitle
      }}
    >
      {children}
    </PostulacionesContext.Provider>
  )
}

export { PostulacionesProvider }
