import React from 'react'
import { render } from '@testing-library/react'

import { LiveSearch } from './LiveSearch'

export const values = [
    'Adam',
    'Włodzimierz',
    'Andrzej',
    'Artur',
    'Barbara',
    'Rudolf',
    'Kazimierz'
]

test('display LiveSearch', () => {
    render(
        <LiveSearch
            onSearch={(query) => console.log(query)}
            fetchSuggestions={async (query) => values.filter(v => v === query)}
        />
    )
})