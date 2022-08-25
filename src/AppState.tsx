import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {CounterState} from './CounterState';
import {SettingsState} from './SettingsState';
import {SimpleCounter} from './SimpleCounter';


export type ValueType = {
    value: number
    maxValue: number
    minValue: number

}
export type FixedValueType = {

    midMaxVal: number
    midMinVal: number

}

function AppState() {
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
        debugger;
        fixedMaxValue = Number(e.currentTarget.value);
        setFv([{...fv[0], midMaxVal: fixedMaxValue}])

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMinValue = Number(e.currentTarget.value);
        setFv([{...fv[0], midMinVal: fixedMinValue}])


    }

    const fixValue = () => {
        debugger;
        setValue([{...value[0], maxValue: fixedMaxValue, minValue: fixedMinValue, value: fixedMinValue}])
    }

    return (
        <div>
            <CounterState
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
            <SimpleCounter/>
        </div>
    );
}


export default AppState;


