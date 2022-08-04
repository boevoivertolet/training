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




    let initialValue = [{value: 0, minValue: 0, maxValue: 11}];


    const [value, setValue] = useState<Array<initialValueType>>(initialValue)

    let fixedMinValue = value[0].minValue
    let fixedMaxValue = value[0].maxValue

    const toMinValue = () => {
        setValue([{...value[0], minValue: fixedMinValue}])
        console.log(value[0].value)
    }


    const plusOneFN = () => {
       if (value[0].value < value[0].maxValue)
            setValue([{...value[0], value: value[0].value + 1}])
    }


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMaxValue = Number(e.currentTarget.value);

    }

    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMinValue = Number(e.currentTarget.value);
    }

    const fixValue = () => {
        setValue([{...value[0], maxValue: fixedMaxValue}]);
        debugger;
        // setValue(fixedMinValue);
        // setValue(fixedMinValue)
    }


    return (
        <div>
            <CounterState
                value={value}
                toMinValue={toMinValue}
                plusOneFN={plusOneFN}
            />
            <SettingsState
                initialValue={initialValue}
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


