import { render, screen } from '@testing-library/react'
import React from 'react'
import { StateWrapper } from './StateWrapper'

const arrayDataExample = ['Kamil', 'Ktoś']

const EmptyNonArray = <div data-testid='empty-state-non-array'>EmptyStateNonArray</div>
const EmptyArray = <div data-testid='empty-state-array'>EmptyStateArray</div>
const Error = <div data-testid='empty-state'>ErrorState</div>
const Loading = <div data-testid='loading-state'>LoadingState</div>
const NonEmptyStateArray = <T extends unknown[]>(data: T) => <div data-testid='non-empty-state'>{data.toString()}</div>
const NonEmptyStateNonArray = <T extends unknown>(data: T extends unknown[] ? never : T) => <div data-testid='non-empty-state'>{JSON.stringify(data)}</div>


test('render LoadingState', () => {
    render(
        <StateWrapper
            isLoading={true}
            isError={false}
            data={arrayDataExample}
            NonEmptyState={NonEmptyStateArray}
            EmptyState={EmptyArray}
            LoadingState={Loading}
            ErrorState={Error}
        />
    )
})