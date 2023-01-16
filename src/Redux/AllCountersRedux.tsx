import React from 'react';
import {SimpleCounterRedux} from './SimpleCounterRedux/SimpleCounterRedux';
import {SimpleCounterWithMaxValueRedux} from './SimpleCounterWithMaxValueRedux/SimpleCounterWithMaxValueRedux';
import {DifficultCounterRedux} from './DifficultCounterRedux/DifficultCounterRedux';
import {DifficultCounter2Redux} from './DifficultCounter2Redux/DifficultCounter2Redux';


export const AllCountersRedux = () => {
    return <>
        <hr/>
        <span>SimpleCounterRedux</span>
        <SimpleCounterRedux/>
        <hr/>
        <span>SimpleCounterWithMaxValueRedux</span>
        <SimpleCounterWithMaxValueRedux/>
        <hr/>
        <span>DifficultCounterRedux</span>
        <DifficultCounterRedux/>
        <hr/>
        <span>DifficultCounter2Redux</span>
        <DifficultCounter2Redux/>
        <hr/>
    </>

}