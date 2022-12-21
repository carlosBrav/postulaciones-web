import { useDropzone } from 'react-dropzone'
import FileUploadStatic from '@presentation/components/file-upload-static'
import { cn } from '@presentation/libs/bem'

import './styles.scss'

type Props = {
  id: string
  name: string
  error: boolean | undefined
  helperText: string | undefined
  onChange: (files: FileList) => void
  // eslint-disable-next-line react/require-default-props
  maxFiles?: number | undefined
  filterExtensions?: string
  maxSize?: number
  msjTypeArchive?: string
}

export default function DragDropFiles({
  onChange = () => {},
  id,
  name,
  error = false,
  helperText = '',
  maxFiles = 1,
  filterExtensions = import.meta.env.VITE_APP_FILE_EXTENSIONS_ALLOWED,
  maxSize = 2000000,
  msjTypeArchive = 'MP4 (max. 2MB)'
}: Props) {
  const onDrop = (acceptedFiles: any) => {
    if (onChange) onChange(acceptedFiles)
  }
  const extensionsAllowed = `${filterExtensions}`.split(',') || ['.pdf']
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        'file/*': extensionsAllowed
      },
      maxSize,
      maxFiles
    })
  const classes = cn('drop-zone')
  return (
    <>
      <div className={classes({ error })} {...getRootProps()}>
        <input type="file" id={id} name={name} {...getInputProps()} />
        <FileUploadStatic
          error={error}
          isDragActive={isDragActive}
          isRejected={fileRejections.length > 0}
          msjTypeArchive={msjTypeArchive}
        />
      </div>
      {error && <p className={classes('error')}>{helperText}</p>}
    </>
  )
}
