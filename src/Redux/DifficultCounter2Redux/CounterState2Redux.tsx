import React from 'react';
import {ValueType} from './DifficultCounter2Redux';
import {UniversalButton} from '../../UniversalButton';



type CounterPropsType = {
    value: ValueType[]
    plusOneFN: () => void
    toMinValue: () => void
    changeMod: () => void

}


export const CounterState2Redux = (props: CounterPropsType) => {





    let value = props.value[0].value
    let maxValue = props.value[0].maxValue
    let minValue = props.value[0].minValue


    const plusOneFN = () => {
        props.plusOneFN()
    }
    const toMinValue = () => {
        props.toMinValue()
    }
    const changeMod = () => {
        props.changeMod()
    }


    return (
        <div className={'App'}>
            <div>
                <div className={value === maxValue || value === 'incorrect value' ? 'red' : 'table'}>{value}</div>
                <UniversalButton title={'inc'}
                                 disabled={value === maxValue || value === 'enter values and press "set"' || value === 'incorrect value'}
                                 callBack={plusOneFN}/>
                <UniversalButton title={'reset'}
                                 disabled={value === minValue || value === 'enter values and press "set"' || value === 'incorrect value'}
                                 callBack={toMinValue}/>
                <UniversalButton title={'set'} callBack={changeMod}/>
            </div>
        </div>
    )

}

