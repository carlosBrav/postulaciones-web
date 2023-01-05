import React from 'react'
import { Box, Slider } from '@mui/material'
import RangeComponent from '@presentation/pages/home/first-tap/components/questions/components/range'
import QuizComponent from '@presentation/pages/home/first-tap/components/questions/components/quiz-form/components/quiz'
import './styles.scss' 
import { EncuestaIndicador } from '@domain/encuesta/models/encuesta-indicador'

type Props = {
  sub_questions: EncuestaIndicador[]
}

function QuizForm({sub_questions}: Props) {
  
  return (
    <div className="quiz-form__container">
      <RangeComponent />
      <Box>
        {sub_questions.map((data: EncuestaIndicador, index: number) => (
          <QuizComponent
            key={data.idIndicador}
            id={data.idIndicador}
            index={data.index}
            title={data.descripcion}
          />
        ))}
      </Box>
    </div>
  )
}

export default QuizForm
