import { Box } from '@mui/material'
import React, { HTMLProps } from 'react'
import './styles.scss'

type Props = {} & HTMLProps<HTMLDivElement>
function LayoutBody({ children }: Props) {
  return (
    <Box className="layout">
      <Box className="layout__body">
        <Box className="layout__content">{children}</Box>
      </Box>
    </Box>
  )
}

export { LayoutBody }
