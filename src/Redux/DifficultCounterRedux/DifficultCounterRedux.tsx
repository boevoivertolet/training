import React, {ChangeEvent, useEffect, useState} from 'react';
import '../../App.css';
import {SettingsStateRedux} from './SettingsStateRedux';
import {CounterStateRedux} from './CounterStateRedux';
import {useDispatch} from 'react-redux';
import {changeValueAC, resetAC, setValueAC} from './difficultCounterReduxReducer';
import {useAppSelector} from '../SimpleCounterRedux/SimpleCounterReduxStore';


export function DifficultCounterRedux() {

    const dispatch = useDispatch()
    const value = useAppSelector(state => state.difficultCounterReduxValue)
    const maxValue = useAppSelector(state => state.difficultCounterReduxValue[0].maxValue)


    /*  let initialValue = [{value: 'enter values and press "set"', minValue: 0, maxValue: 0}];
      const [value, setValue] = useState<Array<ValueType>>(initialValue)*/


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
        /*setValue([{...value[0], value: value[0].minValue}])*/
        dispatch(resetAC())
    }

    const plusOneFN = () => {
        if (value[0].value < maxValue)
            /*if (value[0].value < value[0].maxValue)*/{
            /*setValue([{...value[0], value: Number(value[0].value) + 1}])*/
            dispatch(changeValueAC(Number(value[0].value)))
        }

    }


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMaxVal = Number(e.currentTarget.value);
        setFv([{...fv[0], midMaxVal: fixMaxVal}])
        if (fixMaxVal <= fv[0].midMinVal || fixMaxVal < 0) {
            /*  setValue([{...value[0], value: 'incorrect value'}])*/
            dispatch(changeValueAC('incorrect value'))
        } else {
            /* setValue([{...value[0], value: 'enter values and press "set"'}])*/
            dispatch(changeValueAC('enter values and press "set"'))
        }

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMinVal = Number(e.currentTarget.value);
        setFv([{...fv[0], midMinVal: fixMinVal}])
        if (fv[0].midMaxVal <= fixMinVal || fixMinVal < 0) {
            /* setValue([{...value[0], value: 'incorrect value'}])*/
            dispatch(changeValueAC('incorrect value'))
        } else {
            /*setValue([{...value[0], value: 'enter values and press "set"'}])*/
            dispatch(changeValueAC('enter values and press "set"'))
        }
    }

    const fixValue = () => {
        /*setValue([{...value[0], maxValue: fv[0].midMaxVal, minValue: fv[0].midMinVal, value: fv[0].midMinVal}])*/
        dispatch(setValueAC(fv[0].midMaxVal, fv[0].midMinVal, fv[0].midMinVal))
        localStorage.setItem('fixMaxValue', JSON.stringify(fv[0].midMaxVal))
        localStorage.setItem('fixMinValue', JSON.stringify(fv[0].midMinVal))

    }

    return (
        <div>
            <CounterStateRedux
                value={value}
                toMinValue={toMinValue}
                plusOneFN={plusOneFN}
            />
            <SettingsStateRedux
                fv={fv}
                value={value}
                fixValue={fixValue}
                fixMinValue={fixMinValue}
                fixMaxValue={fixMaxValue}
            />

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