import React from 'react';
import { DifficultCounter } from './DifficultCounter';
import {SimpleCounter} from './SimpleCounter';
import {SimpleCounterWithMaxValue} from './SimpleCounterWithMaxValue';


export const AllCounters = () => {
    return <>
        <hr/>
        <span>SimpleCounter</span>
        <SimpleCounter/>
        <hr/>
        <span>SimpleCounterWithMaxValue</span>
        <SimpleCounterWithMaxValue/>
        <hr/>
        <span>DifficultCounter</span>
        <DifficultCounter/>
        <hr/>
    </>

}