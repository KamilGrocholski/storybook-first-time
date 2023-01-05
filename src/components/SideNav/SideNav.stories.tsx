import React from "react";
import { SideNav } from "./SideNav";
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'SideNav',
    component: SideNav
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />

export const Basic = Template.bind({})

Basic.args = {
    logo: {
        label: 'Logo',
        icon: <div>IMG</div>,
        href: '/'
    },
    linkItems: [
        {
            'href': '/cos',
            'icon': <div>IMG</div>,
            'label': 'Page 1'
        },
        {
            'href': '/cos',
            'icon': <div>IMG</div>,
            'label': 'Page 2'
        },
        {
            'href': '/cos',
            'icon': <div>IMG</div>,
            'label': 'Page 3'
        },
        {
            'href': '/cos',
            'icon': <div>IMG</div>,
            'label': 'Page 4'
        },
        {
            'href': '/cos',
            'icon': <div>IMG</div>,
            'label': 'Page 5'
        },
    ]
}