import React, {ChangeEvent} from 'react';
import {FixedValueType, ValueType} from './AppState';

export type SettingsPropsType = {
    fv: FixedValueType[]
    fixValue: () => void
    fixMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    value: ValueType[]

}


export const SettingsState = (props: SettingsPropsType) => {
    //let value = props.value[0].value
    let maxValue = props.value[0].maxValue
    let minValue = props.value[0].minValue
    let midMaxVal = props.fv[0].midMaxVal
    let midMinVal = props.fv[0].midMinVal


    return (
        <div className={'settings'}>
            <div>
                <button disabled={maxValue === midMaxVal && minValue === midMinVal}
                        onClick={props.fixValue}>set
                </button>
                <div className={'minMaxDiv'}>max:<input placeholder={'value'} onChange={props.fixMaxValue}
                                                        type="number"/></div>
                <div className={'minMaxDiv'}>start: <input placeholder={'value'} onChange={props.fixMinValue}
                                                           type="number"/></div>
            </div>

        </div>
    )

}