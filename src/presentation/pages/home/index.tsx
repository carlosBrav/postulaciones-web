import { Box } from '@mui/material'
import React from 'react'
import TapHeader from '@presentation/components/tap-header'
import TextContent from '@presentation/pages/home/components/first-tap/components/text-content'
import Questions from '@presentation/pages/home/components/first-tap/components/questions'
import { TextVideoContent } from '@presentation/pages/home/components/second-tap/components/text-content'
import { VideoContent } from '@presentation/pages/home/components/second-tap/components/video-content'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import {
  EncuestaRepository,
} from '@domain/encuesta'
import { TextEntrevistaContent } from '@presentation/pages/home/components/thirth-tap/components/text-content'
import { SuccessContent } from '@presentation/pages/home/components/thirth-tap/components/success-content'
import { useHandleEncuesta } from '@presentation/pages/home/hooks/use-handle-encuesta'

type Props = {
  encuesta: EncuestaRepository
}

function Home({ encuesta }: Props) {
  const {
    step,
    stepsActual,
    seccion,
    indicadores,
    stepsSpitch,
    seccionPitch,
    stepsEntrevista,
    seccionEntrevista,
    disabled,
    titleButton,
    handleSteps,
  } = useHandleEncuesta(encuesta)
  return (
    <Box width="100%">
      <TapHeader selected={step} />
      {step === 1 && stepsActual === 0 && seccion && (
        <TextContent textHtml={seccion?.indicaciones as string} />
      )}
      {step === 1 && stepsActual > 0 && (
        <Questions questions={indicadores} step={stepsActual} />
      )}
      {step === 2 && stepsSpitch === 0 && (
        <TextVideoContent textHtml={seccionPitch?.indicaciones as string} />
      )}
      {step === 2 && stepsSpitch > 0 && <VideoContent />}

      {step === 3 && stepsEntrevista === 0 && (
        <TextEntrevistaContent
          textHtml={seccionEntrevista?.indicaciones as string}
        />
      )}
      {step === 3 && stepsEntrevista > 0 && <SuccessContent />}
      {step <= 3 && stepsEntrevista !== 1 && (
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          marginTop="30px"
        >
          <Box width="150px">
            <ButtonCustom
              disabled={disabled}
              title={titleButton}
              type="button"
              onClick={handleSteps}
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Home
