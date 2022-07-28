import React, {ChangeEvent, useState} from 'react';

export const Settings = () => {
    let initialValue = 0;
    let initialMaxValue = 0;

    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)
    const [value, setValue] = useState<number>(initialValue)

    const toZero = () => {
        setValue(0)
    }
    const minusOneFN = () => {
        setValue(value - 1)
    }
    const plusOneFN = () => {
        if (value < maxValue)
            setValue(value + 1)
    }
    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
    }
    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
    }


        return (
        <div className={'App'}>
            <div>
                <button disabled={value === 0} onClick={() => {toZero()}}>set</button>
                <input onChange={fixMaxValue} type="number"/>
                <input onChange={fixMinValue} type="number"/>
            </div>

        </div>
    )

}