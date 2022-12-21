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
  onClick: () => void
  type: 'button'|'submit'
}

function ButtonCustom({ title, type, onClick }: Props) {
  return (
    <ColorButton type={type} fullWidth variant="contained" onClick={onClick}>
      {title}
    </ColorButton>
  )
}

export{ButtonCustom}
