import React, {ChangeEvent} from 'react';

export type SettingsPropsType = {
    fixValue: () => void
    fixMaxValue:(e: ChangeEvent<HTMLInputElement>)=>void
    fixMinValue:(e: ChangeEvent<HTMLInputElement>)=>void
}


export const Settings = (props: SettingsPropsType) => {



    return (
        <div className={'settings'}>
            <div>
                <button onClick={props.fixValue}>set
                </button>
                <div className={'minMaxDiv'}>Max :<input onChange={props.fixMaxValue} type="number"/></div>
                <div className={'minMaxDiv'}>Min : <input onChange={props.fixMinValue} type="number"/></div>
            </div>

        </div>
    )

}