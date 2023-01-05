import React from 'react'
import './Pagination.scss'
import { usePagination } from '../../hooks'

export interface PaginationProps {
    maxPage: number
    renderPagination: ({ page, currentPage, goTo }: { page: number, currentPage: number, goTo: (page: number) => void }) => JSX.Element
    neighbours: number
}

/**
 * 
 * @param maxPage 
 * @param currentPage 
 * @param size 
 * @returns `number[]`
 */
const getPartOfPagination = (maxPage: number, currentPage: number, size: number): number[] => {
    const fromPlaceholder = currentPage - size
    const toPlaceholder = currentPage + size
    const from = fromPlaceholder <= 1 ? 2 : fromPlaceholder
    const to = toPlaceholder >= maxPage ? maxPage - 1 : toPlaceholder
    const partOfPagination: number[] = []

    for (let i = from; i <= to; i++) {
        partOfPagination.push(i)
    }

    return partOfPagination
}

export const Pagination: React.FC<PaginationProps> = ({
    maxPage,
    renderPagination,
    neighbours
}) => {
    const {
        isNext,
        isPrev,
        goNext,
        goPrev,
        currentPage,
        goTo
    } = usePagination(maxPage)

    if (maxPage <= 2) return (
        <div className='pagination-wrapper'>
            {Array.from({ length: maxPage }, (_, index) => (
                renderPagination({
                    page: index + 1,
                    currentPage,
                    goTo
                })
            ))}
        </div>
    )

    return (
        <div className='pagination-wrapper'>
            {renderPagination({
                page: 1,
                currentPage,
                goTo
            })}
            <DirectionButton pageChange={goPrev} canChange={isPrev} label='<<' />
            {getPartOfPagination(maxPage, currentPage, neighbours).map(page => (
                renderPagination({
                    page,
                    currentPage,
                    goTo
                })
            ))}
            <DirectionButton pageChange={goNext} canChange={isNext} label='>>' />
            {renderPagination({
                page: maxPage,
                currentPage,
                goTo
            })}
        </div>
    )
}

const DirectionButton: React.FC<{
    pageChange: () => void,
    canChange: () => boolean,
    label: string
}> = ({
    pageChange,
    canChange,
    label
}) => {
        return (
            <button
                onClick={() => pageChange()}
                className='btn-pagination'
                disabled={!canChange()}
            >
                {label}
            </button>
        )
    }
