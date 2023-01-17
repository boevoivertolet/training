import React from 'react';
import styles from '../SimpleCounterRedux/SimpleCounterRedux.module.css'
import {useAppDispatch, useAppSelector} from '../CounterStore';
import { inqValAC, resetValAC} from './simpleCounterWithMaxValueReduxReducer';



export const SimpleCounterWithMaxValueRedux = () => {

    const dispatch = useAppDispatch()
    const val = useAppSelector(state => state.simpleCounterWithMaxValue.val)
    let maxValue = useAppSelector(state => state.simpleCounterWithMaxValue.maxValue);
    let startValue = useAppSelector(state => state.simpleCounterWithMaxValue.startValue);

    const increment = () => {
        if (val < maxValue) {
            dispatch(inqValAC())
        }

    }
    const resetToStartValue = () => {
        dispatch(resetValAC(startValue))

    }


    return <div className={styles.SimpleCounter}>
        <div className={val === maxValue ? styles.redValue : ''}>{val}</div>
        <button disabled={val === maxValue} onClick={increment}>inc</button>
        <button disabled={val === startValue} onClick={resetToStartValue}>reset</button>

    </div>

}