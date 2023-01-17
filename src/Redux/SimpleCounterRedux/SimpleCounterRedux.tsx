import React from 'react';
import styles from './SimpleCounterRedux.module.css'
import {useAppDispatch, useAppSelector} from '../CounterStore';
import {inqAC, resetAC} from './simpleCounterReduxReducer';


export const SimpleCounterRedux = () => {
    const value = useAppSelector(state => state.simpleCounter.value)
    const dispatch = useAppDispatch()

    const inq = () => {
        dispatch(inqAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }


    return <div className={styles.SimpleCounter}>
        <div>{value}</div>
        <button onClick={inq}>inc</button>
        <button onClick={reset}>reset</button>

    </div>

}