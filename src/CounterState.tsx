import React from 'react';
import {ValueType} from './AppState';



type CounterPropsType = {
    value: ValueType[]
    plusOneFN: () => void
    toMinValue: () => void
}

export const CounterState = (props: CounterPropsType) => {
    let value = props.value[0].value
    let maxValue = props.value[0].maxValue
    let minValue = props.value[0].minValue

    return (
        <div className={'App'}>
            <div>
                <div
                    className={value === maxValue ? 'red' : 'table'}>{maxValue !== 0 ? value : 'enter values and press "set"' && minValue < 0 ? 'incorrect value' : 'enter values and press "set"'}</div>
                <button disabled={value === maxValue} onClick={() => {
                    props.plusOneFN()
                }}>inc
                </button>
                <button onClick={() => {
                    props.toMinValue()
                }}>start value
                </button>
            </div>
            <div>
            </div>
        </div>
    )

}