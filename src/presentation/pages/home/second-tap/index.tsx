import React, { useState } from 'react'
import { Box } from '@mui/material'
import FileComponent from '@presentation/components/file-component'

function SecondTap() {
  const [file, setFile] = useState<File | null>(null)
  const handleFileClear = () => {
    setFile(null)
  }
  const handleFileChange = async (files: FileList) => {
    setFile(files[0] as File)
  }
  return (
    <Box>
      <FileComponent
        file={file as File}
        handleClear={() => handleFileClear()}
        handleChange={(fileList: FileList) => handleFileChange(fileList)}
        // error={!!errors.file}
        // helperText={errors.file?.message as string}
        name={'file'}
      />
    </Box>
  )
}

export { SecondTap }
