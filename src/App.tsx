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
    }

    let initialMaxValue = 0;
    let initialMinValue = 0;


    let [maxValue, setMaxValue] = useState<number>(initialMaxValue)
    let [minValue, setMinValue] = useState<number>(initialMinValue)

    let fixedMinValue = minValue;
    let fixedMaxValue = maxValue;


    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMaxValue = Number(e.currentTarget.value);
        console.log(e.currentTarget.value)

    }

    const fixMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        fixedMinValue = Number(e.currentTarget.value);
        console.log(e.currentTarget.value)

    }

    const fixValue = () => {
            setMaxValue(fixedMaxValue);
            setMinValue(fixedMinValue);
    }


    return (
        <div>
            <Counter
                minValue={minValue}
                maxValue={maxValue}
                toMinValue={toMinValue}
                value={value}
                plusOneFN={plusOneFN}
            />
            <Settings
                fixValue={fixValue}
                fixMinValue={fixMinValue}
                fixMaxValue={fixMaxValue}
                minValue={minValue}
                maxValue={maxValue}
                fixedMaxValue={fixedMaxValue}
                fixedMinValue={fixedMinValue}
            />
        </div>
    );
}


export default App;


