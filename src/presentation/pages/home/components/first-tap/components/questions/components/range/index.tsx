import React from 'react'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'
const marks = [
  {
      value: 0,
      label: '0',
  },
  {
      value: 1,
      label: '1',
  },
  {
      value: 2,
      label: '2',
  },
  {
      value: 3,
      label: '3',
  },
  {
      value: 4,
      label: '4',
  },
]

function RangeComponent() {
    return (
        <div className="range__container">
            <div className="range__info">
                {marks.map((data) => (
                    <TextCommon
                        key={data.value}
                        fontSize="13px"
                        text={data.label}
                        type="dark"
                    />
                ))}
            </div>
        </div>
    )
}

export default RangeComponent
