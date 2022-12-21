import { Button, ButtonProps, styled } from '@mui/material'
import React from 'react'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.getContrastText('#572364'),
  backgroundColor: '#572364',
  '&:hover': {
    backgroundColor: '#572364',
  },
}))

type Props = {
  title: string
  type: 'button'|'submit'
  disabled?: boolean
}

function ButtonComponent({ title, type, disabled = false }: Props) {
  return (
    <ColorButton disabled={disabled} type={type} fullWidth variant="contained">
      {title}
    </ColorButton>
  )
}

export default ButtonComponent
