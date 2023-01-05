import React from "react";
import { StateWrapper } from "./StateWrapper";
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'StateWrapper',
    component: StateWrapper
} as ComponentMeta<typeof StateWrapper>

const Template: ComponentStory<typeof StateWrapper> = (args) => <StateWrapper {...args} />

export const LoadingState = Template.bind({})
export const ErrorState = Template.bind({})
export const EmptyStateArray = Template.bind({})
export const EmptyStateNonArray = Template.bind({})
export const NonEmptyStateArray = Template.bind({})
export const NonEmptyStateNonArray = Template.bind({})

LoadingState.args = {
    isLoading: true,
    isError: false,
    data: {
        name: 'Nazwa'
    },
    NonEmptyState: (data: { name: string }) => <div>{data.name}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}

ErrorState.args = {
    isLoading: false,
    isError: true,
    data: {
        name: 'Nazwa'
    },
    NonEmptyState: (data: { name: string }) => <div>{data.name}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}

EmptyStateArray.args = {
    isLoading: false,
    isError: false,
    data: [],
    NonEmptyState: (data: [{ name: string }]) => <div>{data.map(item => <div>{item.name}</div>)}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}

EmptyStateNonArray.args = {
    isLoading: true,
    isError: false,
    data: null,
    NonEmptyState: (data: { name: string }) => <div>{data.name}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}


NonEmptyStateNonArray.args = {
    isLoading: true,
    isError: false,
    data: {
        name: 'Kamil'
    },
    NonEmptyState: (data: { name: string }) => <div>{data.name}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}

NonEmptyStateArray.args = {
    isLoading: true,
    isError: false,
    data: [{ name: 'Kamil' }, { name: 'Ktoś' }],
    NonEmptyState: (data: { name: string }[]) => <div>{data.map(item => <div>{item.name}</div>)}</div>,
    EmptyState: <div>Empty</div>,
    LoadingState: <div>Loading...</div>,
    ErrorState: <div>Error</div>
}