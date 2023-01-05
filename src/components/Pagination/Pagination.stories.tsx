import React from "react";
import { Pagination } from "./Pagination";
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Basic = Template.bind({})

Basic.args = {
    maxPage: 10,
    neighbours: 4,
    renderPagination: ({
        page,
        currentPage,
        goTo
    }: {
        page: number,
        currentPage: number,
        goTo: (page: number) => void
    }) => (<button onClick={() => goTo(page)} className={`btn-pagination ${currentPage === page && 'btn-pagination-active'}`}>{page}</button>)
}