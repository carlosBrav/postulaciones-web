import React from 'react'
import UploadIcon from 'presentation/assets/images/svg/upload_icon.svg'
import TextCommon from '@presentation/components/text-common'
import { cn } from '@presentation/libs/bem'

import './styles.scss'

type Props = {
  error: boolean
  isDragActive: boolean
  isRejected: boolean
  msjTypeArchive?: string
}

export default function FileUploadStatic({
  error,
  isDragActive,
  isRejected,
  msjTypeArchive = '',
}: Props) {
  const classes = cn('file-upload-static')
  return (
    <div className={classes({ error })}>
      <div className={classes('content')}>
        <img src={UploadIcon} alt="carga" />
        
          {isDragActive ? (
            <span>
              <TextCommon
                fontSize="15px"
                text="Suelte su foto aquí"
                type="dark"
              />
            </span>
          ) : (
            <>
              <span className={classes('link')}>
                <TextCommon
                  fontSize="15px"
                  text="Click para cargar"
                  type="link"
                />
              </span>
              <TextCommon
                fontSize="15px"
                text=" o
              arrastre y suelte su video"
                type="dark"
              />
            </>
          )}
       <TextCommon
              fontSize="15px"
              text={msjTypeArchive}
              type="dark"
            />
        {isRejected && (
          <h5 className={classes('error')}>
            <TextCommon
              fontSize="15px"
              text="Foto rechazada, agregue uno nuevo"
              type="dark"
            />
          </h5>
        )}
      </div>
    </div>
  )
}
