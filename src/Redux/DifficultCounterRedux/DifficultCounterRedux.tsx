import React, {ChangeEvent, useEffect} from 'react';
import '../../App.css';
import {SettingsStateRedux} from './SettingsStateRedux';
import {CounterStateRedux} from './CounterStateRedux';
import {useDispatch} from 'react-redux';
import {changeValueAC, resetAC, setValueAC} from './difficultCounterReduxValueReducer';
import {useAppSelector} from '../CounterStore';
import {
    changeFixedMaXValueAC,
    changeFixedMinValueAC,
    setFixedValueAC
} from './difficultCounterReduxFixedValueReducer';


export function DifficultCounterRedux() {

    const dispatch = useDispatch()
    const value = useAppSelector(state => state.difficultCounterReduxValue)
    const maxValue = useAppSelector(state => state.difficultCounterReduxValue[0].maxValue)
    const fv = useAppSelector(state => state.difficultCounterReduxFixedValue)





    useEffect(() => {
        let fixMaxValue = localStorage.getItem('fixMaxValue')
        let fixMinValue = localStorage.getItem('fixMinValue')
        if (fixMaxValue && fixMinValue) {
            dispatch(setFixedValueAC(fixMaxValue, fixMinValue))
        }
    }, [])
    const toMinValue = () => {dispatch(resetAC())}
    const plusOneFN = () => {
        if (value[0].value < maxValue) {
            dispatch(changeValueAC(Number(value[0].value)))
        }

    }
    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMaxVal = Number(e.currentTarget.value);
        dispatch(changeFixedMaXValueAC(fixMaxVal))
        if (fixMaxVal <= fv[0].midMinVal || fixMaxVal < 0) {
            dispatch(changeValueAC('incorrect value'))
        } else {
            dispatch(changeValueAC('enter values and press "set"'))
        }

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMinVal = Number(e.currentTarget.value);
        dispatch(changeFixedMinValueAC(fixMinVal))
        if (fv[0].midMaxVal <= fixMinVal || fixMinVal < 0) {
            dispatch(changeValueAC('incorrect value'))
        } else {
            dispatch(changeValueAC('enter values and press "set"'))
        }
    }
    const fixValue = () => {
        dispatch(setValueAC(fv[0].midMaxVal, fv[0].midMinVal, fv[0].midMinVal))
        localStorage.setItem('fixMaxValue', JSON.stringify(fv[0].midMaxVal))
        localStorage.setItem('fixMinValue', JSON.stringify(fv[0].midMinVal))

    }

    return (
        <div className={'setCount'}>
            <SettingsStateRedux
                fv={fv}
                value={value}
                fixValue={fixValue}
                fixMinValue={fixMinValue}
                fixMaxValue={fixMaxValue}
            />
            <CounterStateRedux
                value={value}
                toMinValue={toMinValue}
                plusOneFN={plusOneFN}
            />
        </div>
    );
}


export type ValueType = {
    value: number | string
    maxValue: number | string
    minValue: number | string

}
export type FixedValueType = {

    midMaxVal: number | string
    midMinVal: number | string

}