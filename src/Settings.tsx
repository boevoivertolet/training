import React, {ChangeEvent} from 'react';

export type SettingsPropsType = {
    fixValue: (tempMaxValue:number,tempMinValue:number) => void
    fixMaxValue: (fixedMaxValue: number) => void
    fixMinValue: (fixedMinValue: number) => void


}


export const Settings = (props: SettingsPropsType) => {


    const onChangeMaxHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        let fixedMaxValue = Number(e.currentTarget.value)
        props.fixMaxValue(fixedMaxValue)

    }
    const onChangeMinHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        let fixedMinValue = Number(e.currentTarget.value)
        props.fixMinValue(fixedMinValue)

    }




    return (
        <div className={'settings'}>
            <div>
                <button onClick={()=>props.fixValue(,)}>set
                </button>
                <div className={'minMaxDiv'}>Max :<input onChange={onChangeMaxHAndler} type="number"/></div>
                <div className={'minMaxDiv'}>Min : <input onChange={onChangeMinHAndler} type="number"/></div>
            </div>

        </div>
    )

}