import React from 'react';
import {ValueType} from './DifficultCounter';

type DefaultButtonType = {
    title: string
    value: ValueType[]
    callBack: () => void


}
export const UniversalButton = (props: DefaultButtonType) => {
    let value = props.value[0].value
    let maxValue = props.value[0].maxValue
    const callBack = () => {props.callBack()}



    return (
        <button /*disabled={value === maxValue}*/ onClick={callBack}>{props.title}</button>
    )
}