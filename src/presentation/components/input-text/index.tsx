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
  type?: 'text'|'password'
}

export default function InputComponent({
  id = '',
  isMultiline = false,
  name = ``,
  control = {},
  helperText = '',
  placeholder = '',
  label='',
  type='text',
  maxLength = 100
}: Props) {
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
          {...field}
          error={!!helperText}
          inputProps={{ maxLength }}
          helperText={helperText}
          type={type}
        />
      )}
    />
  )
}
