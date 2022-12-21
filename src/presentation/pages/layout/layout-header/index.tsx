import React, { useContext } from 'react'
import { Box } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'


function LayoutHeader() {
  const {title} = useContext(PostulacionesContext)
  return (
    <Box
      width="100%"
      height="60px"
      paddingLeft="20px"
      style={{ backgroundColor: '#572364' }}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <TextCommon fontSize="20px" text={title} type="secondary" />
    </Box>
  )
}

export { LayoutHeader }
