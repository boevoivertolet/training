import React, {ChangeEvent} from 'react';
import {FixedValueType, ValueType} from './DifficultCounter';

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
                <button disabled={midMaxVal === maxValue && midMinVal === minValue || midMaxVal <= midMinVal || midMaxVal< 0 || midMinVal < 0 }
                        onClick={props.fixValue}>set
                </button>
                <div>max:<input className={midMaxVal < 0  || midMaxVal <= midMinVal  ? 'incorrectValue' : ''} onChange={props.fixMaxValue}
                                type="number"/></div>
                <div>start:<input className={midMinVal < 0 || midMaxVal <= midMinVal  ? 'incorrectValue' : ''} onChange={props.fixMinValue}
                                  type="number"/></div>
            </div>

        </div>
    )

}