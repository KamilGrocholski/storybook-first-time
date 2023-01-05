import React from "react"

export interface StateWrapperProps<T> {
    isLoading: boolean
    isError: boolean
    data: T
    /**
     * Render `NonEmptyState` when:
     *  a) `data` is an array, and it's length is not equal to 0
     *  b) `data` is not undefined or null
     * @param data wrapped by NonNullable
     * @returns any JSX element
     */
    NonEmptyState: (data: NonNullable<T>) => JSX.Element
    /**
     * Render `EmptyState` when:
     *  a) `data` is an array, and it's length is equal to 0
     *  b) `data` is undefined or null (undefined || {} || null)
     */
    EmptyState: React.ReactNode
    /**
     * Render `ErrorState` when `isError` is true
     */
    ErrorState: React.ReactNode
    /**
     * Render `LoadingState` when `isLoading` is true
     */
    LoadingState: React.ReactNode
}

export const StateWrapper = <T extends unknown>({
    isLoading,
    isError,
    data,
    NonEmptyState,
    EmptyState,
    ErrorState,
    LoadingState
}: StateWrapperProps<T>): JSX.Element => {
    // LoadingState
    if (isLoading) return <>{LoadingState}</>

    // ErrorState 
    if (isError) return <>{ErrorState}</>

    // EmptyState - array
    if (Array.isArray(data) && data.length <= 0) return <>{EmptyState}</>

    // EmptyState - non array
    if (data === undefined || data === null) return <>{EmptyState}</>

    // NonEmptyState
    return NonEmptyState(data)
}
