import { Button, ButtonProps, styled } from '@mui/material'
import React from 'react'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.getContrastText('#1A5EAF'),
  backgroundColor: '#1A5EAF',
  '&:hover': {
    backgroundColor: '#1A5EAF',
  },
}))

type Props = {
  title: string
  onClick: () => void
  type: 'button' | 'submit'
  disabled?: boolean
}

function ButtonCustom({ title, type, onClick, disabled = false }: Props) {
  return (
    <ColorButton
      disabled={disabled}
      type={type}
      fullWidth
      variant="contained"
      onClick={onClick}
    >
      {title}
    </ColorButton>
  )
}

export { ButtonCustom }
