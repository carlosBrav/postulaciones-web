import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHandleQuantityQuestions } from '@presentation/pages/home/components/first-tap/hooks/use-handle-quantity-questions'
import { titleHome } from '@presentation/constants'
import {
  EncuestaPitchCreate,
  EncuestaRepository,
  EncuestaRequest,
  EncuestaResponse,
} from '@domain/encuesta'
import { EncuestaEvalSec } from '@domain/encuesta/models/encuesta-evalsec-request'
import { EncuestaEvalSecInd } from '@domain/encuesta/models/encuesta-evalsecind-request'
import { EncuestaSeccion } from '@domain/encuesta/models/encuesta-seccion'
import { TransformFile } from '@presentation/libs/file-convert'
import { EncuestaIndicador } from '@domain/encuesta/models/encuesta-indicador'
import { useHandleIntegrations } from '@presentation/pages/home/hooks/use-handle-integrations'
import orderBy from 'lodash/orderBy'

function useHandleEncuesta(encuesta: EncuestaRepository) {
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
    isLoadingCreateEncuesta,
    isLoadingCreatePitch,
    isSuccessCeateEncuesta,
    mutateCreateEncuesta,
    mutateCreatePitch,
  } = useHandleIntegrations(encuesta)

  const [secciones, setSecciones] = useState<EncuestaSeccion[]>([])
  const [seccion, setSeccion] = useState<EncuestaResponse>()
  const [seccionPitch, setSeccionPitch] = useState<EncuestaResponse>()
  const [seccionEntrevista, setSeccionEntrevista] = useState<EncuestaResponse>()

  const navigate = useNavigate()

  const { getQuantitys, isFinishStepsQuestions, stepsActual } =
    useHandleQuantityQuestions()

  useEffect(() => {
    setTitle(titleHome)
  }, [])

  useEffect(() => {
    if (!participante) {
      navigate('/evaluacion')
    }
  }, [participante])

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
          evalSec.factor = secciones.find((val) => val.idSeccion === section)
            ?.correccion as number
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
    if (secciones && secciones.length > 0) {
      secciones.forEach((data) => {
        data.listIndicador.forEach((val) => {
          const newEncuestaIndicador = EncuestaIndicador.fromJson({
            ...val,
          }) as EncuestaIndicador
          listIndicadores.push(newEncuestaIndicador)
        })
      })
      const listIndicadoresOrdenado = orderBy(
        listIndicadores,
        'orden',
        'asc'
      ).map((val, index) => {
        return EncuestaIndicador.fromJson({
          ...val,
          respuesta: 1,
          index: index + 1,
        })
      }) as EncuestaIndicador[]
      setIndicadores(listIndicadoresOrdenado)
      setIdSections([
        ...new Set(listIndicadoresOrdenado.map((val) => val.idSeccion)),
      ])
    }
  }, [secciones])

  useEffect(() => {
    if (indicadores && indicadores.length) {
      getQuantitys(indicadores.length)
    }
  }, [indicadores])

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

  return {
    step,
    stepsActual,
    seccion,
    indicadores,
    stepsSpitch,
    seccionPitch,
    stepsEntrevista,
    seccionEntrevista,
    handleSteps,
    titleButton:
      step === 3 && stepsEntrevista === 0 ? 'Finalizar' : 'Continuar',
    disabled:
      (step === 2 && file === null && stepsSpitch === 1) ||
      isLoadingCreateEncuesta ||
      isLoadingCreatePitch,
  }
}

export { useHandleEncuesta }
