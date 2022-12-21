import React from 'react'
import { Box, Slider } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'
type Props = {
  id: number
  title: string
}

function QuizComponent({ id, title }: Props) {
  const valuetext = (value: number) => `${value}`

  return (
    <div className="quiz">
      <div className="quiz__text">
        <Box marginBottom="20px">
          <TextCommon fontSize="12px" text={`${id}. ${title}`} type="dark" />
        </Box>
      </div>
      <Box width="100px">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={4}
        />
      </Box>
    </div>
  )
}

export default QuizComponent
