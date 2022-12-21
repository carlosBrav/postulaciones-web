import React, { useState } from 'react'
import { Box } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'

const taps_steps = [
    { position: 1, title: 'Potencial Emprendedor', type: 'primary' },
    { position: 2, title: 'Pitch', type: 'normal' },
    { position: 3, title: 'Entrevista', type: 'normal' },
]

type Props ={
    selected: number
}

function TapComponent({selected = 1}: Props) {
    // const [tapSelected, setTapSelected] = useState<number>(1)

    const validTypeText = (
        status: boolean
    ): 'primary' | 'secondary' | 'normal' => {
        return status ? 'primary' : 'normal'
    }

    return (
        <Box className="tap-container">
            {taps_steps.map((data, index) => (
                <Box
                    key={index}
                    flex={1}
                    className={`${
                        selected === data.position
                            ? 'tap-container__tap-selected'
                            : 'tap-container__tap-unselected'
                    }`}
                >
                    <div>
                        <TextCommon
                            fontSize="15px"
                            text={data.title}
                            type={validTypeText(selected === data.position)}
                        />
                    </div>
                </Box>
            ))}
        </Box>
    )
}

export default TapComponent
