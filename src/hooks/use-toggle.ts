import { useCallback, useState } from "react"

export const useToggle = (
    defaultValue?: boolean
) => {
    const [value, setValue] = useState<boolean>(!!defaultValue)

    const toggle = useCallback(() => setValue(prevValue => !prevValue), [])

    return {
        value,
        setValue,
        toggle
    }
}