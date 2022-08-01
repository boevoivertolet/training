import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {Settings} from './Settings';


function App() {
    let initialValue = 0;

    const [value, setValue] = useState<number>(initialValue)

    const toMinValue = () => {
        setValue(minValue)
    }

    const plusOneFN = () => {
        if (value < maxValue)
            setValue(value + 1)
        console.log(maxValue)
    }

    let initialMaxValue = 0;
    let initialMinValue = 0;


    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)
    const [minValue, setMinValue] = useState<number>(initialMinValue)

    let tempMaxValue;
    let tempMinValue;
    const fixMaxValue = (fixedMaxValue: number) => {
        tempMaxValue = fixedMaxValue;
    }

    const fixMinValue = (fixedMinValue: number) => {
        tempMinValue = fixedMinValue;
    }


    const fixValue = (tempMaxValue: number, tempMinValue: number) => {
        setMaxValue(tempMaxValue);
        setMinValue(tempMinValue);
    }


    return (
        <div>
            <Counter minValue={minValue} maxValue={maxValue} toMinValue={toMinValue} value={value}
                     plusOneFN={plusOneFN}/>
            <Settings fixValue={fixValue} fixMaxValue={fixMaxValue} fixMinValue={fixMinValue}
                      />
        </div>
    );
}

export default App;


