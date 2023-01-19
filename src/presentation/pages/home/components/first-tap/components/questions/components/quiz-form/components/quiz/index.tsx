import React, { useContext } from 'react'
import { Box, Slider } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'
import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'
import { ResponseForm } from '@domain/response/model/response-form'
import cloneDeep from 'lodash.clonedeep'
import { EncuestaIndicador } from '@domain/encuesta/models/encuesta-indicador'

type Props = {
  id: number
  index: number
  title: string
}

function QuizComponent({ id, title, index }: Props) {
  const valuetext = (value: number) => `${value}`
  const { indicadores, setIndicadores } = useContext(PostulacionesContext)

  const handleChange = (event: Event, newValue: number | number[]) => {
    const selectIndicador = indicadores.find((val) => val.idIndicador === id)
    const indexIndicador = indicadores.indexOf(
      selectIndicador as EncuestaIndicador
    )
    const cloneIndicador = cloneDeep(indicadores)
    cloneIndicador[indexIndicador].respuesta = newValue as number
    setIndicadores(cloneIndicador)
    console.log('cloneIndicador ', cloneIndicador)
  }

  return (
    <div className="quiz">
      <div className="quiz__text">
        <Box marginBottom="20px">
          <TextCommon fontSize="12px" text={`${index}. ${title}`} type="dark" />
        </Box>
      </div>
      <Box width="100px">
        <Slider
          onChange={handleChange}
          defaultValue={1}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          color="primary"
          step={1}
          min={1}
          max={5}
        />
      </Box>
    </div>
  )
}

export default QuizComponent
