import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

type Props = {
  id: string
  isMultiline?: boolean
  name: string
  control: any
  helperText?: string
  placeholder?: string
  label?: string
  maxLength?: number
  type?: 'text' | 'password'
  value: string
  onChange?: (data: string) => void
}

export default function InputComponent({
  id = '',
  isMultiline = false,
  name = ``,
  control = {},
  helperText = '',
  placeholder = '',
  label = '',
  type = 'text',
  maxLength = 100,
  value = '',
  onChange = () => {},
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      onChange(event.target.value)
    } else {
      if (event.target.value.length > 0 && /^\d+$/.test(event.target.value)) {
        onChange(event.target.value)
      }
    }
  }
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          placeholder={placeholder}
          id={id}
          fullWidth
          style={{ borderRadius: 8 }}
          multiline={isMultiline}
          error={!!helperText}
          inputProps={{ maxLength }}
          helperText={helperText}
          type={type}
          onChange={handleChange}
          value={value}
        />
      )}
    />
  )
}
