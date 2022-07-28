import React, {ChangeEvent, useState} from 'react';

export const Counter = () => {
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


    return (
        <div className={'App'}>
            <div>
                <div className={value === maxValue ? 'red' : 'table'}>{value}</div>
                <button disabled={value === maxValue} onClick={() => {
                    plusOneFN()
                }}>+1
                </button>
                {/*<button disabled={value === 0} onClick={() => {
                    minusOneFN()
                }}>-1
                </button>*/}
                <button disabled={value === 0} onClick={() => {
                    toZero()
                }}>reset
                </button>
            </div>
            <div>
          {/*      <input onChange={fixMaxValue} type="number"/>*/}
            </div>
        </div>
    )

}