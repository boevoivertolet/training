import React, {ChangeEvent} from 'react';

export type SettingsPropsType = {
    fixValue: () => void
    fixMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    fixMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    minValue: number
    fixedMaxValue: number
    fixedMinValue: number
    value: number

}


export const Settings = (props: SettingsPropsType) => {


    return (
        <div className={'settings'}>
            <div>
                <button
                    onClick={props.fixValue}>set
                </button>
                <div className={'minMaxDiv'}>Max :<input placeholder={'0'}  onChange={props.fixMaxValue} type="number"/></div>
                <div className={'minMaxDiv'}>Min : <input placeholder={'0'} onChange={props.fixMinValue} type="number"/></div>
            </div>

        </div>
    )

}