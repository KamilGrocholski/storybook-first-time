import React from 'react'
import { render } from '@testing-library/react'

import { InputText, Validator } from './InputText'

const validator: Validator = (value) => {
    return {
        info: "Must starts with other than A",
        warning: value.endsWith('a') ? 'When ends with a, it may cause some problems.' : null,
        error: value.startsWith('A') ? 'It can not starts with A' : null
    }
}

test('display Input', () => {
    render(
        <InputText validator={validator} label='Name' />
    )
})