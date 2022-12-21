import React from 'react'
import { Typography } from '@mui/material'
import './styles.scss'

type Props = {
  text: string
  fontSize: string
  type: 'primary' | 'secondary' | "normal" | "dark" | "link"
}

const TextCommon = ({ text = '', fontSize = '', type = "primary" }: Props) => {

  const handleColor = () => {
    switch(type){
      case 'primary': return '#572364'
      case 'secondary': return '#FFFFFF'
      case 'dark': return '#262626'
      case 'link': return '#1976d2'
      default: return '#b1b1b1'
    }
  }

  return (
    <Typography
      variant="h6"
      component="h6"
      fontSize={fontSize}
      color={handleColor()}
      className="text-common"
      fontWeight="bold"
    >
      {text}
    </Typography>
  )
}

export default TextCommon
