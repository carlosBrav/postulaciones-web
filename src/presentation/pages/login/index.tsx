import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import SelectComponent from '@presentation/components/select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationFormLogin } from '@presentation/pages/login/hooks/use-validation-form'
import InputTextComponent from '@presentation/components/input-text'
import ButtonComponent from '@presentation/components/button'
import { useNavigate } from 'react-router-dom'
import './styles.scss'
import { PostulacionesContext } from '../context/postulaciones-context'
import {tileLogin} from '@presentation/constants'

const type_documents = [
  { value: '0001', label: 'CARNET DE EXTRANJERIA' },
  { value: '0002', label: 'DNI' },
]

function Login() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFormLogin),
    defaultValues: {
      document_type: '',
      document_number: '',
    },
  })
  const {setTitle} = useContext(PostulacionesContext)

  const onSubmit = (data: any) => {
    console.log('data ', data)
    navigate('/evaluacion/home')
  }

  useEffect(()=>{
    setTitle(tileLogin)
  },[])

  return (
    <Box padding="20px" maxWidth="400px" width="100%">
      <form style={{ flex: '1' }} onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom="30px">
          <SelectComponent
            name="document_type"
            control={control}
            data={type_documents}
            idLabel="type_document_label"
            idSelect="type_document_select"
            label="Tipo de documento"
          />
        </Box>
        <Box marginBottom="30px">
          <InputTextComponent
            label="Documento"
            name="document_number"
            control={control}
            id="number_document"
            type="text"
          />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box width="150px">
            <ButtonComponent title={'Ingresar'} type="submit" />
          </Box>
        </Box>
      </form>
    </Box>
    // <Box width="100%" minHeight="100vh" display="flex" flexDirection="column">
    //   <Box width="100%" height="60px" style={{ backgroundColor: '#572364' }}>
    //     <TextCommon
    //       fontSize="20px"
    //       text="Ingresa tu DNI o CI (Carnet de extranjería)"
    //       type="secondary"
    //     />
    //   </Box>
    //   <Box className="login-body">
    //     <Box padding="20px" maxWidth="400px" width="100%">
    //       <form style={{ flex: '1' }} onSubmit={handleSubmit(onSubmit)}>
    //         <Box marginBottom="30px">
    //           <SelectComponent
    //             name="document_type"
    //             control={control}
    //             data={type_documents}
    //             idLabel="type_document_label"
    //             idSelect="type_document_select"
    //             label="Tipo de documento"
    //           />
    //         </Box>
    //         <Box marginBottom="30px">
    //           <InputTextComponent
    //             label="Documento"
    //             name="document_number"
    //             control={control}
    //             id="number_document"
    //             type="text"
    //           />
    //         </Box>
    //         <Box
    //           width="100%"
    //           display="flex"
    //           flexDirection="column"
    //           alignItems="center"
    //         >
    //           <Box width="150px">
    //             <ButtonComponent title={'Ingresar'} type="submit" />
    //           </Box>
    //         </Box>
    //       </form>
    //     </Box>
    //   </Box>
    // </Box>
  )
}

export default Login
