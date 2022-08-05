import React, {ChangeEvent, useState} from 'react';
import {initialValueType} from './AppState';

export type SettingsPropsType = {
    fixValue: () => void
    fixMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixedMaxValue: number
    fixedMinValue: number
    value: initialValueType[]

}


export const SettingsState = (props: SettingsPropsType) => {
    // let value = props.value[0].value
    // let maxValue = props.value[0].maxValue
    // let minValue = props.value[0].minValue




    return (
        <div className={'settings'}>
            <div>
                <button //disabled={value===minValue}
                    onClick={props.fixValue}>set
                </button>
                <div className={'minMaxDiv'}>max value :<input placeholder={'0'} onChange={props.fixMaxValue}
                                                               type="number"/></div>
                <div className={'minMaxDiv'}>start value : <input placeholder={'0'}  onChange={props.fixMinValue}
                                                                  type="number"/></div>
            </div>

        </div>
    )

}