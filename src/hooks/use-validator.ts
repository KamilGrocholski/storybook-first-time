import { useState } from "react"

type Validator<T> = (valueToCheck: T) => boolean

export const useValidator = <T>(validator: Validator<T>) => {
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const reset = () => {
        setIsValid(null)
    }

    const validate = (valueToCheck: T) => {
        const validationResult = validator(valueToCheck)
        setIsValid(validationResult)
    }

    return {
        isValid,
        validate,
        reset
    }
}

