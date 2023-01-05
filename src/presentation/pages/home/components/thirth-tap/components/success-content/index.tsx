import React from 'react'
import { Box } from '@mui/material'
import SuccessLogo from '@presentation/assets/images/jpg/success.jpg'
import TextCommon from '@presentation/components/text-common'

function SuccessContent() {
  return (
    <Box width="100%" padding="10px" marginTop="20px" textAlign="justify">
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img alt="success" src={SuccessLogo} />
        <Box>
          <TextCommon
            fontSize="25px"
            text="Muchas gracias por su participación"
            type="dark"
          />
        </Box>
      </Box>
    </Box>
  )
}

export { SuccessContent }
