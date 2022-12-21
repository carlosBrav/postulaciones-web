import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

type Props = {
  idLabel: string
  idSelect: string
  data: any
  multiple?: boolean
  control?: any
  name?: string
  required?: boolean
  error?: boolean
  helperText?: string
  placeholder?: string
  label?: string
}
export default function SelectComponent({
  idLabel = '',
  idSelect = '',
  data = [],
  multiple = false,
  control = null,
  name = '',
  error = false,
  helperText = '',
  placeholder='',
  label=''
}: Props) {
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth error={error}>
           <InputLabel id={idLabel}>
            {label}
          </InputLabel>
          <Select
            label={label}
            id={idSelect}
            multiple={multiple}
            placeholder={placeholder}
            {...field}
          >
            {data.map((val: any) => (
              <MenuItem value={val.value} key={val.value}>
                {val.label}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  )
}
