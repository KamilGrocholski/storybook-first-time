import { useState } from "react"

interface UseTextParams {

}

export const useText = (defaultValue?: string) => {
    const [value, setValue] = useState<string>(defaultValue ?? '')

    const isEmpty = (): boolean => value === ''

    return {
        value,
        setValue,
        isEmpty
    }
}