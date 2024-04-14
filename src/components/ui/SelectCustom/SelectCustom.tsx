'use client'

import { useState } from 'react'
import Select, { StylesConfig } from 'react-select'

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

const customStyles: StylesConfig = {
    control: provided => ({
        ...provided,
        backgroundColor: '#FAFAFA',
        color: '#1A202C',
        borderRadius: '12px',
        border: 'none',
        padding: '6px 9px'
    }),
    container: provided => ({
        ...provided
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'rgba(26, 32, 44, .1)' : 'white',
        color: 'black',
        borderRadius: '5px'
    })
}

const SelectCustom = ({ options }: { options: { value: string; label: string }[] }) => {
    const [selectedOption, setSelectedOption] = useState<any>(null)

    const handleChange = (e: any) => {
        console.log(e)
        setSelectedOption(e)
    }

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
        />
    )
}

export default SelectCustom
