import React from 'react'
import IconDelete from '@presentation/assets/images/svg/close.svg'
import DragDropFiles from '@presentation/components/drag-drop-files'
import {TransformFile} from '@presentation/libs/file-convert'
import './styles.scss'

type Props = {
  file?: File | string
  handleClear: () => void
  handleChange: (files: FileList) => void
  error?: boolean
  helperText?: string
  name: string
}

export default function FileComponent({
  file,
  handleClear,
  handleChange,
  error = false,
  helperText = '',
  name = 'file'
}: Props) {

  return file ? (
    <div className="upload-file-description__files">
      <span className="upload-file-description__delete" onClick={handleClear}>
        <img width={20} height={20} src={IconDelete} alt="icono-close" />
      </span>
      <img width={60} height={60} alt="image" src={(typeof file === 'string') ? file  : URL.createObjectURL(file)} />
    </div>
  ) : (
    <DragDropFiles
      id={name}
      name={name}
      onChange={(files) => handleChange(files)}
      error={error}
      helperText={helperText}
    />
  )
}
