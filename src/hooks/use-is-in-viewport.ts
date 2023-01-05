import { useEffect, useMemo, useState } from "react"

export const useIsInViewport = <T extends React.RefObject<HTMLElement> | null>(
    ref: T, 
    options?: IntersectionObserverInit | undefined
) => {
    const [isInViewport, setIsInViewport] = useState<boolean>(false)

    const observer = useMemo(() => {
        return new IntersectionObserver(([entry]) => 
            setIsInViewport(entry.isIntersecting),
            options
        )
    }, [])

    useEffect(() => {
        if (ref && ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [ref, observer])

    return isInViewport
}