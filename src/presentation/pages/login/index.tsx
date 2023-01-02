import { Box } from '@mui/material'
import React from 'react'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import ButtonComponent from '@presentation/components/button'
import TextCommon from '@presentation/components/text-common'
import { AuthenticationRepository } from '@domain/authentication'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import { useFormLogin } from '@presentation/pages/login/hooks/use-form-login'

type Props = {
  auth: AuthenticationRepository
}

function Login({ auth }: Props) {
  const {
    listTypeDocs,
    isLoadingAuth,
    control,
    handleSubmit,
    onSubmit,
    tileLogin,
  } = useFormLogin(auth)
  return isLoadingAuth ? (
    <FullScreenLoader />
  ) : (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="20px"
        paddingBottom="15px"
        paddingTop="15px"
        style={{ backgroundColor: '#572364' }}
      >
        <TextCommon fontSize="20px" text={tileLogin} type="secondary" />
      </Box>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%" padding="20px" maxWidth="400px">
          <form style={{ flex: '1' }} onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom="30px">
              <SelectComponent
                name="idTipDoc"
                control={control}
                data={listTypeDocs}
                idLabel="type_document_label"
                idSelect="type_document_select"
                label="Tipo de documento"
              />
            </Box>
            <Box marginBottom="30px">
              <InputTextComponent
                label="Documento"
                name="numDoc"
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
      </Box>
    </Box>
  )
}

export default Login
