import React, {ChangeEvent} from 'react';
import {initialValueType} from './AppState';

export type SettingsPropsType = {
    fixValue: () => void
    fixMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixedMaxValue: number
    fixedMinValue: number
    initialValue: initialValueType[]

}


export const SettingsState = (props: SettingsPropsType) => {
    let value = props.initialValue[0].value
    let maxValue = props.initialValue[0].maxValue
    let minValue = props.initialValue[0].minValue

    return (
        <div className={'settings'}>
            <div>
                <button
                    onClick={props.fixValue}>set
                </button>
                <div className={'minMaxDiv'}>max value :<input placeholder={'0'}  onChange={props.fixMaxValue} type="number"/></div>
                <div className={'minMaxDiv'}>start value : <input placeholder={'0'} onChange={props.fixMinValue} type="number"/></div>
            </div>

        </div>
    )

}