import * as yup from 'yup'

export const validationFormLogin = yup
  .object()
  .shape({
    document_type: yup.string().required('Tipo de documento requerido'),
    document_number: yup
      .mixed()
      .when('document_type', {
        is: (document_type: string) => document_type === 'dni',
        then: yup.string().min(8, 'Número de DNI incorrecto'),
      })
      .when('document_type', {
        is: (document_type: string) => document_type === 'ce',
        then: yup.string().min(9, 'Número de CE incorrecto'),
      }),
  })
  .required()