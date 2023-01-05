import React, { useState } from 'react'
import { quantityQuestionsPerPage } from '@presentation/pages/home/components/first-tap/constants'

function useHandleQuantityQuestions() {
  const [stepsQuestion, setStepsQuestion] = useState<number>(0)
  const [stepsActual, setStepsActual] = useState<number>(0)

  const getQuantitys = (quantity: number) => {
    const division = quantity / quantityQuestionsPerPage
    if (division > 0 && division <= 1) {
      //0 a 20
      setStepsQuestion(1)
    }
    if (division > 1 && division <= 2) {
      //21 a 40
      setStepsQuestion(2)
    }
    if (division > 2 && division < 3) {
      //41 a 50
      setStepsQuestion(3)
    }
  }

  const isFinishStepsQuestions = () => {
    if (stepsActual === stepsQuestion) {
      return true
    } else {
      setStepsActual(stepsActual + 1)
    }
    return false
  }

  return {
    stepsQuestion,
    quantityQuestionsPerPage,
    stepsActual,
    isFinishStepsQuestions,
    getQuantitys,
  }
}

export { useHandleQuantityQuestions }
