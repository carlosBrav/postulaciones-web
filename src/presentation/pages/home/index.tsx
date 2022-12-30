import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import TapHeader from '@presentation/pages/home/components/tap-header'
import TextContent from '@presentation/pages/home/first-tap/components/text-content'
import Questions from '@presentation/pages/home/first-tap/components/questions'
import { SecondTap } from '@presentation/pages/home/second-tap'
import { PostulacionesContext } from '../context/postulaciones-context'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import { useHandleQuantityQuestions } from '@presentation/pages/home/first-tap/hooks/use-handle-quantity-questions'
import { titleHome } from '@presentation/constants'
import useGenerateResponse from '@presentation/pages/home/first-tap/hooks/use-generate-response'

const questions = [
  { id: 1, title: 'Me1 esmero en buscar cosas que necesitan hacerse.' },
  {
    id: 2,
    title:
      'Cuando me enfrentó a un problema difícil invierto mucho tiempo en encontrar una solución.',
  },
  { id: 3, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  {
    id: 4,
    title:
      ' Cuando comienzo una tarea o un proyecto nuevo, recaudo toda la información posible antes de darle curso.',
  },
  { id: 5, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 6, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 7, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 8, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  {
    id: 9,
    title:
      'mi rendimiento en el trabajo es mejor que el de otras personas con las que trabajo.',
  },
  { id: 10, title: 'Me esmero10 en buscar cosas que necesitan hacerse.' },
  { id: 11, title: 'Me esmero11 en buscar cosas que necesitan hacerse.' },
  { id: 12, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 13, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 14, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 15, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 16, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 17, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 18, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 19, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 20, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 21, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
  { id: 22, title: 'Me esmero en buscar cosas que necesitan hacerse.' },
]

function Home() {
  const { step, addStep, setTitle, setResponse, file } =
    useContext(PostulacionesContext)
  const { getQuantitys, isFinishStepsQuestions, stepsActual } =
    useHandleQuantityQuestions()

  const { transformToResponseType } = useGenerateResponse()

  useEffect(() => {
    getQuantitys(questions.length)
  }, [])

  useEffect(() => {
    setTitle(titleHome)
  }, [])

  useEffect(() => {
    if (questions.length > 0) {
      setResponse(transformToResponseType(questions))
    }
  }, [questions])

  const handleSteps = () => {
    if (isFinishStepsQuestions()) {
      addStep()
    }
  }

  return (
    <Box width="100%">
      <TapHeader selected={step} />
      {step === 1 && stepsActual === 0 && <TextContent />}
      {step === 1 && stepsActual > 0 && (
        <Questions questions={questions} step={stepsActual} />
      )}
      {step === 2 && <SecondTap />}
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        marginTop="30px"
      >
        <Box width="150px">
          <ButtonCustom 
          disabled={(step === 2 && file === null)}
          title="Continuar" 
          type="button" 
          onClick={handleSteps} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
