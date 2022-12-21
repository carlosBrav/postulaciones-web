import { Box } from '@mui/material'
import React from 'react'
import QuizForm from '@presentation/pages/home/first-tap/components/questions/components/quiz-form'
import { quantityQuestionsPerPage } from '@presentation/pages/home/first-tap/constants'
import './styles.scss'

type Props = {
  questions: any
  step: number
}

function Questions({ questions, step }: Props) {
  const subQuestions = questions.slice(
    (step - 1) * quantityQuestionsPerPage,
    step * quantityQuestionsPerPage
  )
  return (
    <Box width="100%" marginTop="30px">
      {subQuestions.length === 20 ? (
        <Box className="questions">
          <QuizForm sub_questions={subQuestions.slice(0, 10)} />
          <QuizForm sub_questions={subQuestions.slice(10, 20)} />
        </Box>
      ) : (
        <Box>
          <QuizForm sub_questions={subQuestions.slice(0, 10)} />
        </Box>
      )}
    </Box>
  )
}

export default Questions
