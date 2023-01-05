import { useCallback, useState } from "react"

export const usePagination = (maxPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const isNext = useCallback(() =>  currentPage < maxPage, [currentPage, maxPage])

    const isPrev = useCallback(() => currentPage > 1, [currentPage, maxPage])

    const goNext = () => {
        if (isNext() === false) return 
        setCurrentPage(prev => prev + 1)
    }

    const goPrev = () => {
        if (isPrev() === false) return 
        setCurrentPage(prev => prev - 1)
    }

    const goTo = (page: number) => {
        if (page < 1 || page > maxPage) return
        setCurrentPage(page)
    }

    return {
        isNext,
        isPrev,
        goNext,
        goPrev,
        currentPage,
        goTo
    }
}