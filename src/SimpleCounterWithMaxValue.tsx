import React, {useState} from 'react';
import styles from './SimpleCounter.module.css'


export const SimpleCounterWithMaxValue = () => {
    const [value, setValue] = useState<number>(0)
    let maxValue = 5;
    let startValue = 0;

    const increment = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }

    }
    const resetToStartValue = () => {
        setValue(startValue)

    }


    return <div className={styles.SimpleCounter}>
        <div className={value === maxValue ? styles.redValue : ''}>{value}</div>
        <button disabled={value === maxValue} onClick={increment}>inc</button>
        <button disabled={value === startValue} onClick={resetToStartValue}>reset</button>

    </div>

}