import React, {ChangeEvent, useEffect} from 'react';
import '../../App.css';
import {CounterState2Redux} from './CounterState2Redux';
import {SettingsState2Redux} from './SettingsState2Redux';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../CounterStore';
import {
    changeFixedMaXValueAC2,
    changeFixedMinValueAC2,
    setFixedValueAC2, setModAC2
} from './difficultCounter2ReduxFixedValueReducer';
import {changeValueAC2, resetAC2, setValueAC2} from './difficultCounter2ReduxValueReducer';


export function DifficultCounter2Redux() {

    const dispatch = useDispatch()
    const value = useAppSelector(state => state.difficultCounter2ReduxValue)
    const maxValue = useAppSelector(state => state.difficultCounter2ReduxValue[0].maxValue)
    const fv = useAppSelector(state => state.difficultCounter2ReduxFixedValue)
    const mod = useAppSelector(state => state.difficultCounter2ReduxFixedValue[0].mod)


    useEffect(() => {
        let fixMaxValue = localStorage.getItem('fixMaxValue')
        let fixMinValue = localStorage.getItem('fixMinValue')
        if (fixMaxValue && fixMinValue) {
            dispatch(setFixedValueAC2(fixMaxValue, fixMinValue))
        }
    }, [])


    const toMinValue = () => {
        dispatch(resetAC2())
    }

    const plusOneFN = () => {
        if (value[0].value < maxValue) {
            dispatch(changeValueAC2(Number(value[0].value)))
        }

    }


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMaxVal = Number(e.currentTarget.value);
        dispatch(changeFixedMaXValueAC2(fixMaxVal))
        if (fixMaxVal <= fv[0].midMinVal || fixMaxVal < 0) {
            dispatch(changeValueAC2('incorrect value'))
        } else {
            dispatch(changeValueAC2('enter values and press "set"'))
        }

    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMinVal = Number(e.currentTarget.value);
        dispatch(changeFixedMinValueAC2(fixMinVal))
        if (fv[0].midMaxVal <= fixMinVal || fixMinVal < 0) {
            dispatch(changeValueAC2('incorrect value'))
        } else {
            dispatch(changeValueAC2('enter values and press "set"'))
        }
    }
    const fixValue = () => {
        dispatch(setValueAC2(fv[0].midMaxVal, fv[0].midMinVal, fv[0].midMinVal))
        localStorage.setItem('fixMaxValue', JSON.stringify(fv[0].midMaxVal))
        localStorage.setItem('fixMinValue', JSON.stringify(fv[0].midMinVal))

    }
    const changeMod = () => {
        dispatch(setModAC2(!mod))
    }

    return (
        <div className={'setCount'}>
            {mod
                ? <SettingsState2Redux
                    changeMod={changeMod}
                    mod={mod}
                    fv={fv}
                    value={value}
                    fixValue={fixValue}
                    fixMinValue={fixMinValue}
                    fixMaxValue={fixMaxValue}
                />
                : <CounterState2Redux
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
    maxValue: number | string
    minValue: number | string

}
export type FixedValueType = {

    midMaxVal: number | string
    midMinVal: number | string

}