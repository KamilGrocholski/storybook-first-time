import React, { useState } from "react"
import './InputText.scss'

export type SetMessage = React.Dispatch<React.SetStateAction<string | null>>
export interface Options {
    info: string | null
    warning: string | null
    error: string | null
}
export type Validator = (valueToValidate: string) => Options

export interface InputTextProps {
    validator: Validator
    label?: string
    defaultValue?: string
}

export const InputText: React.FC<InputTextProps> = ({
    validator,
    label,
    defaultValue
}) => {
    const [value, setValue] = useState<string>(defaultValue ?? '')
    const [infoMessage, setInfoMessage] = useState<string | null>(null)
    const [warningMessage, setWarningMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const resetValue = () => setValue(defaultValue ?? '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const { info, warning, error } = validator(value)
        setValue(value)
        setInfoMessage(info)
        setWarningMessage(warning)
        setErrorMessage(error)
    }

    return (
        <div className='wrapper'>
            <label className='label'>{label}</label>
            <input
                type='text'
                value={value}
                onChange={handleChange}
                className='input'
            />
            <div className='messages-container'>
                <div className='error-message'>{errorMessage}</div>
                <div className='warning-message'>{warningMessage}</div>
                <div className='info-message'>{infoMessage}</div>
            </div>
        </div>
    )
}
