import React, {ChangeEvent, useEffect} from 'react';
import '../../App.css';
import {CounterState2Redux} from './CounterState2Redux';
import {SettingsState2Redux} from './SettingsState2Redux';
import {useAppDispatch, useAppSelector} from '../CounterStore';
import {
    changeFixedMaXValueTC2,
    changeFixedMinValueTC2,
    setModTC2,
    setValueWithFixedValueTC2
} from './difficultCounter2ReduxFixedValueReducer';
import {changeValueTC2, resetTC2, setValueTC2} from './difficultCounter2ReduxValueReducer';


export function DifficultCounter2Redux() {

    const dispatch = useAppDispatch()
    const value = useAppSelector(state => state.difficultCounter2ReduxValue)
    const maxValue = useAppSelector(state => state.difficultCounter2ReduxValue[0].maxValue)
    const fv = useAppSelector(state => state.difficultCounter2ReduxFixedValue)
    const mod = useAppSelector(state => state.difficultCounter2ReduxFixedValue[0].mod)


    useEffect(() => {
        dispatch(setValueWithFixedValueTC2(Number(value)))
    }, [])
    const toMinValue = () => {
        dispatch(resetTC2())
    }
    const plusOneFN = () => {
        dispatch(changeValueTC2(value, maxValue))
    }
    const fixValue = () => {
        dispatch(setValueTC2(fv))
    }
    const changeMod = () => {
        dispatch(setModTC2(mod))
    }

    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMaxVal = Number(e.currentTarget.value);
        dispatch(changeFixedMaXValueTC2(fixMaxVal, fv))
    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let fixMinVal = Number(e.currentTarget.value);
        dispatch(changeFixedMinValueTC2(fixMinVal, fv))
    }


    return (
        <div className={'setCount'}>
            {mod
                ? <SettingsState2Redux
                    mod={mod}
                    fv={fv}
                    value={value}
                    fixValue={fixValue}
                    fixMinValue={fixMinValue}
                    fixMaxValue={fixMaxValue}
                    changeMod={changeMod}
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