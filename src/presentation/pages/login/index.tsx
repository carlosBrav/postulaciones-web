import { Box, FormHelperText } from '@mui/material'
import React from 'react'
import SelectComponent from '@presentation/components/select'
import InputNumericComponent from '@presentation/components/input-text/numeric'
import ButtonComponent from '@presentation/components/button'
import TextCommon from '@presentation/components/text-common'
import { AuthenticationRepository } from '@domain/authentication'
import { EncuestaRepository } from '@domain/encuesta'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import { useFormLogin } from '@presentation/pages/login/hooks/use-form-login'

type Props = {
  auth: AuthenticationRepository
  encuesta: EncuestaRepository
}

function Login({ auth, encuesta }: Props) {
  const {
    listTypeDocs,
    isLoading,
    control,
    handleSubmit,
    onSubmit,
    tileLogin,
    error,
    errors,
    maxLength,
    handleDocument,
    numDoc,
  } = useFormLogin(auth, encuesta)
  return isLoading ? (
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
        style={{ backgroundColor: '#1A5EAF' }}
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
                error={!!errors.idTipDoc}
                helperText={errors.idTipDoc?.message as string}
              />
            </Box>
            <Box marginBottom="30px">
              <InputNumericComponent
                control={control}
                name="numDoc"
                label="Documento"
                onChange={handleDocument}
                value={numDoc}
                id="number_document"
                type="text"
                maxLength={maxLength}
                helperText={errors.numDoc?.message as string}
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
          {error && (
            <Box width="100%" marginTop="20px">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <FormHelperText style={{ fontSize: 15 }} error>
                  {error}
                </FormHelperText>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Login
