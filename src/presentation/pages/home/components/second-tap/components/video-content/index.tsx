import React, { useContext, useState } from 'react'
import { Box } from '@mui/material'
import FileComponent from '@presentation/components/file-component'
import { PostulacionesContext } from '@presentation/pages/context/postulaciones-context'

function VideoContent() {
  const { setFile, file } = useContext(PostulacionesContext)
  //const [file, setFile] = useState<File | null>(null)
  const handleFileClear = () => {
    setFile(null)
  }
  const handleFileChange = async (files: FileList) => {
    setFile(files[0] as File)
  }
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      paddingTop="50px"
    >
      <Box width="50%">
        <FileComponent
          file={file as File}
          handleClear={() => handleFileClear()}
          handleChange={(fileList: FileList) => handleFileChange(fileList)}
          // error={!!errors.file}
          // helperText={errors.file?.message as string}
          name={'file'}
        />
      </Box>
    </Box>
  )
}

export { VideoContent }
