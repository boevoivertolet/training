import React, {ChangeEvent, useState} from 'react';

export const Settings = () => {
    let initialValue = 0;
    let initialMaxValue = 0;

    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)
    const [value, setValue] = useState<number>(initialValue)

    const toZero = () => {
        setValue(0)
    }

    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = Number(e.currentTarget.value)
        setMaxValue(minValue)
    }


        return (
        <div className={'settings'}>
            <div>
                <button disabled={value === 0} onClick={() => {toZero()}}>set</button>
                <div className={'minMaxDiv'}>Max :<input onChange={fixMaxValue} type="number"/></div>
                <div className={'minMaxDiv'}>Min : <input onChange={fixMinValue} type="number"/></div>
            </div>

        </div>
    )

}