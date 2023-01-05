import React from "react"
import { useEffect, useRef, useState } from "react"
import './LiveSearch.scss'

export interface LiveSearchProps {
    onSearch: (query: string) => void
    fetchSuggestions: (query: string) => Promise<string[]>
}

export const LiveSearch: React.FC<LiveSearchProps> = ({
    onSearch,
    fetchSuggestions
}) => {
    const [query, setQuery] = useState<string>('')

    const [suggestions, setSuggestions] = useState<string[]>([])

    const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

    const [selectedIndex, setSelectedIndex] = useState<number>(-1)

    const inputRef = useRef<HTMLInputElement>(null)

    const suggestionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (query === '') {
            setShowSuggestions(false)
            setSuggestions([])
            setSelectedIndex(-1)
        } else {
            (async () => {
                const fetchedSuggestions = await fetchSuggestions(query)
                setSuggestions(fetchedSuggestions)
                setShowSuggestions(selectedIndex > -1 ? false : true)
            })()
        }
    }, [query])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setQuery(query)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e

        switch (key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(Math.min(selectedIndex + 1, suggestions.length - 1))
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(Math.max(selectedIndex - 1, -1))
                break
            case 'Enter':
                e.preventDefault()
                setQuery(suggestions[selectedIndex])
                setShowSuggestions(false)
                break
            case 'Escape':
                e.preventDefault()
                setShowSuggestions(false)
                setSelectedIndex(-1)
                break
            default:
                break
        }
    }

    const handleFocus = () => {
        setShowSuggestions(true)
    }

    const handleBlur = () => {
        setShowSuggestions(false)
        setSelectedIndex(-1)
    }

    const handleMouseDown = (selectedIndex: number) => {
        setQuery(suggestions[selectedIndex])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='query-input-wrapper'>
                <div className='query-input-container'>
                    <input
                        ref={inputRef}
                        value={query ?? ''}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        placeholder='Search...'
                        className='query-input'
                    />
                </div>
                <button className='search-button' type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-search">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            {showSuggestions ?
                <div
                    ref={suggestionsRef}
                    tabIndex={1}
                    className='suggestions-container'
                >
                    {suggestions.map((suggestion, i) => (
                        <div
                            key={`${i},${suggestion}`}
                            className={`suggestion-item ${i === selectedIndex ? 'selected' : ''}`}
                            onMouseDown={() => handleMouseDown(i)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
                : null}
        </form>
    )
}