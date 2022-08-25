import React, {useState} from 'react';
import styles from './SimpleCounter.module.css'


export const SimpleCounter = () => {
    const [value, setValue] = useState<number>(0)

    return <div className={styles.SimpleCounter}>
        <div>{value}</div>
        <button onClick={() => setValue(value + 1)}>inc</button>
        <button onClick={() => setValue(0)}>reset</button>

    </div>

}