import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {CounterState} from './CounterState';
import {SettingsState} from './SettingsState';


export type initialValueType = {
    value: number
    maxValue: number
    minValue: number
}

function AppState() {


    let initialValue = [{value: 0, minValue: 0, maxValue: 0}];
    const [value, setValue] = useState<Array<initialValueType>>(initialValue)


    const toMinValue = () => {
        setValue([{ ...value[0], value: fixedMinValue}])
        console.log([{...value[0], value: fixedMinValue}])
    }


    const plusOneFN = () => {
        if (value[0].value < value[0].maxValue)
            setValue([{...value[0], value: value[0].value + 1}])
    }

    let fixedMinValue = value[0].minValue;
    let fixedMaxValue = value[0].maxValue;


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMaxValue = Number(e.currentTarget.value);

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMinValue = Number(e.currentTarget.value);
    }

    const fixValue = () => {
         setValue([{...value[0], maxValue:fixedMaxValue, minValue:fixedMinValue, value:fixedMinValue}])

    }


    return (
        <div>
            <CounterState
                value={value}
                toMinValue={toMinValue}
                plusOneFN={plusOneFN}
            />
            <SettingsState
                value={value}
                fixValue={fixValue}
                fixMinValue={fixMinValue}
                fixMaxValue={fixMaxValue}
                fixedMaxValue={fixedMaxValue}
                fixedMinValue={fixedMinValue}
            />
        </div>
    );
}


export default AppState;


