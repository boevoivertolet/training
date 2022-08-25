import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {CounterState} from './CounterState';
import {SettingsState} from './SettingsState';



export type ValueType = {
    value: number
    maxValue: number
    minValue: number

}
export type FixedValueType = {

    midMaxVal: number
    midMinVal: number

}

export function DifficultCounter() {
    let initialFixedValue = [{midMaxVal: 0, midMinVal: 0}]
    const [fv, setFv] = useState<Array<FixedValueType>>(initialFixedValue)

    let initialValue = [{value: 0, minValue: 0, maxValue: 0}];
    const [value, setValue] = useState<Array<ValueType>>(initialValue)


    const toMinValue = () => {
        setValue([{...value[0], value: fixedMinValue}])

    }


    const plusOneFN = () => {
        if (value[0].value < value[0].maxValue)
            setValue([{...value[0], value: value[0].value + 1}])
    }

    let fixedMinValue = value[0].minValue;
    let fixedMaxValue = value[0].maxValue;


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        fixedMaxValue = Number(e.currentTarget.value);
        setFv([{...fv[0], midMaxVal: fixedMaxValue}])
        console.log(fv)

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMinValue = Number(e.currentTarget.value);
        setFv([{...fv[0], midMinVal: fixedMinValue}])
        console.log(fv)


    }

    const fixValue = () => {
        setValue([{...value[0], maxValue: fv[0].midMaxVal, minValue: fv[0].midMinVal, value: fv[0].midMinVal}])


    }

    return (
        <div>
            <CounterState
                fv={fv}
                value={value}
                toMinValue={toMinValue}
                plusOneFN={plusOneFN}
            />
            <SettingsState
                fv={fv}
                value={value}
                fixValue={fixValue}
                fixMinValue={fixMinValue}
                fixMaxValue={fixMaxValue}
            />

        </div>
    );
}





