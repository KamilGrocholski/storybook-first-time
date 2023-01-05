import React from "react";
import { InputText, Validator } from "./InputText";
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'InputText',
    component: InputText
} as ComponentMeta<typeof InputText>

const validator: Validator = (value) => {
    return {
        info: "Must starts with other than A",
        warning: value.endsWith('a') ? 'When ends with a, it may cause some problems.' : null,
        error: value.startsWith('A') ? 'It can not starts with A' : null
    }
}

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />

export const Basic = Template.bind({})

Basic.args = {
    validator: validator,
    label: 'Name'
}