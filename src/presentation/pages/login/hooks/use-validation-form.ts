import * as yup from 'yup'

export const validationFormLogin = yup
  .object()
  .shape({
    idTipDoc: yup.string().required('Tipo de documento requerido'),
    numDoc: yup
      .mixed()
      .when('document_type', {
        is: (idTipDoc: string) => idTipDoc === '00001',
        then: yup.string().min(8, 'Número de DNI incorrecto'),
      })
      .when('idTipDoc', {
        is: (idTipDoc: string) => idTipDoc === '00002',
        then: yup.string().min(9, 'Número de CE incorrecto'),
      }),
  })
  .required()