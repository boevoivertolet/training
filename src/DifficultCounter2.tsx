import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {CounterState2} from './CounterState2';
import {SettingsState2} from './SettingsState2';


export function DifficultCounter2() {

    const [mod, setMod] = useState(false)
    let initialValue = [{value: 'enter values and press "set"', minValue: 0, maxValue: 0}];
    const [value, setValue] = useState<Array<ValueType>>(initialValue)


    let initialFixedValue = [{midMaxVal: 0, midMinVal: 0}]
    const [fv, setFv] = useState<Array<FixedValueType>>(initialFixedValue)

    useEffect(() => {
        let fixMaxValue = localStorage.getItem('fixMaxValue')
        let fixMinValue = localStorage.getItem('fixMinValue')
        if (fixMaxValue && fixMinValue) {
            setFv([{...fv[0], midMaxVal: JSON.parse(fixMaxValue), midMinVal: JSON.parse(fixMinValue)}])
        }
    }, [])


    const toMinValue = () => {
        setValue([{...value[0], value: value[0].minValue}])
    }

    const plusOneFN = () => {
        if (value[0].value < value[0].maxValue)
            setValue([{...value[0], value: Number(value[0].value) + 1}])
    }


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMaxVal = Number(e.currentTarget.value);
        setFv([{...fv[0], midMaxVal: fixMaxVal}])
        if (fixMaxVal <= fv[0].midMinVal || fixMaxVal < 0) {
            setValue([{...value[0], value: 'incorrect value'}])
        } else {
            setValue([{...value[0], value: 'enter values and press "set"'}])
        }

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMinVal = Number(e.currentTarget.value);
        setFv([{...fv[0], midMinVal: fixMinVal}])
        if (fv[0].midMaxVal <= fixMinVal || fixMinVal < 0) {
            setValue([{...value[0], value: 'incorrect value'}])
        } else {
            setValue([{...value[0], value: 'enter values and press "set"'}])
        }
    }

    const fixValue = () => {
        setValue([{...value[0], maxValue: fv[0].midMaxVal, minValue: fv[0].midMinVal, value: fv[0].midMinVal}])
        localStorage.setItem('fixMaxValue', JSON.stringify(fv[0].midMaxVal))
        localStorage.setItem('fixMinValue', JSON.stringify(fv[0].midMinVal))

    }
    const changeMod = () => {
        setMod(!mod)
    }

    return (
        <div className={'setCount'}>
            {mod
                ? <SettingsState2
                    changeMod={changeMod}
                    mod={mod}
                    fv={fv}
                    value={value}
                    fixValue={fixValue}
                    fixMinValue={fixMinValue}
                    fixMaxValue={fixMaxValue}
                />
                : <CounterState2
                    value={value}
                    toMinValue={toMinValue}
                    plusOneFN={plusOneFN}
                    changeMod={changeMod}
                />


            }


        </div>
    );
}


export type ValueType = {
    value: number | string
    maxValue: number
    minValue: number

}
export type FixedValueType = {

    midMaxVal: number
    midMinVal: number

}