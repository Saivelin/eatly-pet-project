'use client'

import { useEffect, useState } from 'react'
import styles from './RangeInput.module.scss'

const RangeInput = ({ defaultValue, range, rangePrefix }: { defaultValue?: number; range: number[], rangePrefix?: any }) => {
    const [value, setValue] = useState(50)

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue)
        }
    }, [])

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.customRangeInput}>
            <input
                type='range'
                min={range[0]}
                max={range[range.length - 1]}
                value={value}
                onChange={handleChange}
                className={styles.rangeInput}
            />
            <div className={styles.range}>
                {range.map(el => (
                    <span>{rangePrefix ? rangePrefix : null}{el}</span>
                ))}
            </div>
        </div>
    )
}

export default RangeInput
