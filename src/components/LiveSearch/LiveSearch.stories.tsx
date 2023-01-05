import React from "react";
import { LiveSearch } from "./LiveSearch";
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'LiveSearch',
    component: LiveSearch
} as ComponentMeta<typeof LiveSearch>

const values = [
    'Adam',
    'Włodzimierz',
    'Andrzej',
    'Artur',
    'Barbara',
    'Rudolf',
    'Kazimierz'
]

const Template: ComponentStory<typeof LiveSearch> = (args) => <LiveSearch {...args} />

export const Basic = Template.bind({})

Basic.args = {
    onSearch: (query: string) => console.log(query),
    fetchSuggestions: async (query: string) => values.filter(value => value.toLowerCase().startsWith(query.toLowerCase())),
}