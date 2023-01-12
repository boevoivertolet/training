import React from 'react';
import {ValueType} from './DifficultCounter';

type DefaultButtonType = {
    title: string
    value: ValueType[]
    plusOneFN: () => void


}
export const UniversalButton = (props: DefaultButtonType) => {
    let value = props.value[0].value
    let maxValue = props.value[0].maxValue



    return (
        <button disabled={value === maxValue} onClick={() => {
            props.plusOneFN()
        }}>{props.title}
        </button>
    )
}