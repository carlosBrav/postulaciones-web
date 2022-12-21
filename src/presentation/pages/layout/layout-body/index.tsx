import { Box } from '@mui/material'
import React, { HTMLProps } from 'react'
import './styles.scss'

type Props = {} & HTMLProps<HTMLDivElement>
function LayoutBody({ children }: Props) {
  return <Box className="login-body">{children}</Box>
}

export {LayoutBody}
