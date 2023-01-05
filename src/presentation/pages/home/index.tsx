import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import TapHeader from '@presentation/pages/home/components/tap-header'
import TextContent from '@presentation/pages/home/first-tap/components/text-content'
import Questions from '@presentation/pages/home/first-tap/components/questions'
import { TextVideoContent } from '@presentation/pages/home/second-tap/components/text-content'
import { VideoContent } from '@presentation/pages/home/second-tap/components/video-content'
import { PostulacionesContext } from '../context/postulaciones-context'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import { useHandleQuantityQuestions } from '@presentation/pages/home/first-tap/hooks/use-handle-quantity-questions'
import { titleHome } from '@presentation/constants'
import useGenerateResponse from '@presentation/pages/home/first-tap/hooks/use-generate-response'
import { EncuestaSeccion } from '@domain/encuesta/models/encuesta-seccion'
import { EncuestaIndicador } from '@domain/encuesta/models/encuesta-indicador'
import {
  EncuestaPitchCreate,
  EncuestaRepository,
  EncuestaRequest,
  EncuestaResponse,
} from '@domain/encuesta'
import { useCreateEncuesta } from '@main/adapters/encuesta/use-create-encuesta'
import { useCreatePitch } from '@main/adapters/encuesta/use-create-pitch'
import { EncuestaEvalSec } from '@domain/encuesta/models/encuesta-evalsec-request'
import { EncuestaEvalSecInd } from '@domain/encuesta/models/encuesta-evalsecind-request'
import { TransformFile } from '@presentation/libs/file-convert'
import { TextEntrevistaContent } from '@presentation/pages/home/thirth-tap/components/text-content'
import { SuccessContent } from '@presentation/pages/home/thirth-tap/components/success-content'

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

type Props = {
  encuesta: EncuestaRepository
}

function Home({ encuesta }: Props) {
  const {
    step,
    addStep,
    setTitle,
    setResponse,
    file,
    listEncuestas,
    indicadores,
    setIndicadores,
    participante,
    setIdSections,
    idSections,
    stepsSpitch,
    setStepsSpitch,
    stepsEntrevista,
    setStepsEntrevista,
  } = useContext(PostulacionesContext)

  const {
    isLoading: isLoadingCreateEncuesta,
    isSuccess: isSuccessCeateEncuesta,
    mutate: mutateCreateEncuesta,
  } = useCreateEncuesta(encuesta)

  const {
    isLoading: isLoadingCreatePitch,
    isSuccess: isSuccessCreatePitch,
    mutate: mutateCreatePitch,
  } = useCreatePitch(encuesta)

  const { getQuantitys, isFinishStepsQuestions, stepsActual } =
    useHandleQuantityQuestions()

  const { transformToResponseType } = useGenerateResponse()

  useEffect(() => {
    setTitle(titleHome)
  }, [])

  useEffect(() => {
    if (questions.length > 0) {
      setResponse(transformToResponseType(questions))
    }
  }, [questions])

  const handleSteps = async () => {
    if (step === 1) {
      if (isFinishStepsQuestions()) {
        const createEncuesta = new EncuestaRequest()
        createEncuesta.idProyecto = participante?.idProyecto as number
        createEncuesta.idParticipante = participante?.idParticipante as number
        createEncuesta.idEvaluacion = 3
        createEncuesta.idEstado = '00002'
        createEncuesta.idTipo = '00003'
        createEncuesta.idUsuMod = participante?.idParticipante as number
        let listEvalSec: EncuestaEvalSec[] = []
        idSections.forEach((section) => {
          const evalSec = new EncuestaEvalSec()
          evalSec.idSeccion = section
          evalSec.factor = secciones[0].correccion
          const evalSecInd: EncuestaEvalSecInd[] = indicadores
            .filter((val) => val.idSeccion === section)
            .map((indicador) =>
              EncuestaEvalSecInd.fromJson({
                idIndicador: indicador.idIndicador,
                respuesta: indicador.respuesta,
              })
            )
          evalSec.listProyectoParticipanteEvalSecInd = [...evalSecInd]
          listEvalSec.push(evalSec)
        })
        createEncuesta.listProyectoParticipanteEvalSec = [...listEvalSec]
        mutateCreateEncuesta(createEncuesta)
      }
    }
    if (step === 2 && stepsSpitch <= 1) {
      setStepsSpitch(stepsSpitch + 1)
    }
    if (step === 2 && stepsSpitch === 1) {
      const pitchRequest = new EncuestaPitchCreate()
      pitchRequest.idProyecto = participante?.idProyecto as number
      pitchRequest.idParticipante = participante?.idParticipante as number
      pitchRequest.idEvaluacion = 4
      pitchRequest.idEstado = '00001'
      pitchRequest.idTipo = '00004'
      pitchRequest.score = 0
      pitchRequest.idUsuMod = participante?.idParticipante as number
      pitchRequest.videoBase64 = (await TransformFile(file as File)) as string
      mutateCreatePitch(pitchRequest)
    }

    if (step === 3 && stepsEntrevista <= 1) {
      setStepsEntrevista(stepsEntrevista + 1)
    }
  }

  useEffect(() => {
    if (stepsSpitch > 1) {
      addStep()
    }
  }, [stepsSpitch])

  useEffect(() => {
    if (isSuccessCeateEncuesta) {
      addStep()
    }
  }, [isSuccessCeateEncuesta])

  // useEffect(() => {
  //   if (isSuccessCreatePitch) {
  //     addStep()
  //   }
  // }, [isSuccessCreatePitch])

  const [secciones, setSecciones] = useState<EncuestaSeccion[]>([])
  const [seccion, setSeccion] = useState<EncuestaResponse>()
  const [seccionPitch, setSeccionPitch] = useState<EncuestaResponse>()
  const [seccionEntrevista, setSeccionEntrevista] = useState<EncuestaResponse>()

  useEffect(() => {
    if (listEncuestas && listEncuestas.length > 0) {
      const filterEncuesta = listEncuestas.filter(
        (val) => val.idTipo === '00003'
      )[0]
      setSeccion(filterEncuesta as EncuestaResponse)
      setSecciones(filterEncuesta?.listSeccion as EncuestaSeccion[])
    }
  }, [listEncuestas])

  useEffect(() => {
    if (listEncuestas && listEncuestas.length > 0) {
      const filterEncuesta = listEncuestas.filter(
        (val) => val.idTipo === '00004'
      )[0]
      setSeccionPitch(filterEncuesta as EncuestaResponse)
    }
  }, [listEncuestas])

  useEffect(() => {
    if (listEncuestas && listEncuestas.length > 0) {
      const filterEncuesta = listEncuestas.filter(
        (val) => val.idTipo === '00005'
      )[0]
      setSeccionEntrevista(filterEncuesta as EncuestaResponse)
    }
  }, [listEncuestas])

  useEffect(() => {
    let listIndicadores: EncuestaIndicador[] = []
    let contador = 1
    if (secciones && secciones.length > 0) {
      secciones.forEach((data) => {
        data.listIndicador.forEach((val) => {
          const newEncuestaIndicador = EncuestaIndicador.fromJson({
            ...val,
          }) as EncuestaIndicador
          newEncuestaIndicador.index = contador
          newEncuestaIndicador.respuesta = 0
          listIndicadores.push(newEncuestaIndicador)
          contador++
        })
      })
    }
    setIndicadores(listIndicadores)
    setIdSections([...new Set(listIndicadores.map((val) => val.idSeccion))])
  }, [secciones])

  useEffect(() => {
    if (indicadores && indicadores.length) {
      getQuantitys(indicadores.length)
    }
  }, [indicadores])

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
              disabled={
                (step === 2 && file === null && stepsSpitch === 1) ||
                isLoadingCreateEncuesta ||
                isLoadingCreatePitch
              }
              title={
                step === 3 && stepsEntrevista === 0 ? 'Finalizar' : 'Continuar'
              }
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
