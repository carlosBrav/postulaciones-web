import React from 'react'
import { Box, Slider } from '@mui/material'
import RangeComponent from '@presentation/pages/home/first-tap/components/questions/components/range'
import QuizComponent from '@presentation/pages/home/first-tap/components/questions/components/quiz-form/components/quiz'
import './styles.scss' 

type Props = {
  sub_questions: any
}

function QuizForm({sub_questions}: Props) {
  
  return (
      <div className="quiz-form__container">
        <RangeComponent />
        <Box>
          {sub_questions.map((data: any, index: number) => (
            <QuizComponent key={index} id={data.id} title={data.title}/>
          ))}
        </Box>
        </div>
  )
}

export default QuizForm
