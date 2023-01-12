import React, {ChangeEvent} from 'react';
import {FixedValueType, ValueType} from './DifficultCounter';
import {UniversalButton} from './UniversalButton';

export type SettingsPropsType = {
    fv: FixedValueType[]
    fixValue: () => void
    fixMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    value: ValueType[]

}


export const SettingsState = (props: SettingsPropsType) => {
    let maxValue = props.value[0].maxValue
    let minValue = props.value[0].minValue
    let midMaxVal = props.fv[0].midMaxVal
    let midMinVal = props.fv[0].midMinVal


    const fixValue = () => {props.fixValue()}

    return (
        <div className={'settings'}>
            <div>
                <UniversalButton title={'set'} disabled={ midMaxVal === maxValue && midMinVal === minValue || midMaxVal <= midMinVal || midMaxVal< 0 || midMinVal < 0} callBack={fixValue}/>
                <div>max:<input value={props.fv[0].midMaxVal} className={midMaxVal < 0  || midMaxVal <= midMinVal  ? 'incorrectValue' : ''} onChange={props.fixMaxValue} type="number"/></div>
                <div>start:<input value={props.fv[0].midMinVal} className={midMinVal < 0 || midMaxVal <= midMinVal  ? 'incorrectValue' : ''} onChange={props.fixMinValue} type="number"/></div>
            </div>

        </div>
    )

}