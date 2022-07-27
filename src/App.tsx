import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    let initialValue = 0;
    let initialMaxValue = 0;

    const [maxValue, setMaxValue] = useState(initialMaxValue)
    const [value, setValue] = useState<number>(initialValue)

    const toZero = () => {
        console.log(value)
        setValue(0)
    }

    const minusOneFN = () => {
        console.log(value)
        setValue(value - 1)
    }

    const plusOneFN = () => {
        console.log(value)
        if (value < maxValue)
            setValue(value + 1)
    }

    const fixMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        debugger;
        console.log(e.currentTarget.value)
        // @ts-ignore
       setMaxValue(e.currentTarget.value)
    }
    return (
        <div className="App">
            <div>
                <button disabled={value === maxValue} onClick={plusOneFN}>+1</button>
                <div>{value}</div>
                <button disabled={value === 0} onClick={minusOneFN}>-1</button>
                <button disabled={value === 0} onClick={toZero}>reset</button>
            </div>
            <div>
                <input onChange={fixMaxValue} type="number"/>
            </div>

        </div>
    );
}

export default App;


