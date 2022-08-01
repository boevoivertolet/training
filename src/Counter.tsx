import React  from 'react';



type CounterPropsType ={
    maxValue: number
    minValue: number
    toMinValue:()=> void
    value:number
    plusOneFN:()=> void
}

export const Counter = (props: CounterPropsType) => {
 /*   let initialValue = 0;

    const [value, setValue] = useState<number>(initialValue)

    const toZero = () => {
        setValue(0)
    }

    const plusOneFN = () => {
        if (value < props.maxValue)
            setValue(value + 1)
        console.log(props.maxValue)
    }*/


    return (
        <div className={'App'}>
            <div>
                <div className={props.value === props.maxValue ? 'red' : 'table'}>{props.value}</div>
                <button disabled={props.value === props.maxValue} onClick={() => {
                    props.plusOneFN()
                }}>+1
                </button>

                <button disabled={props.value === 0} onClick={() => {
                    props.toMinValue()
                }}>reset
                </button>
            </div>
            <div>
            </div>
        </div>
    )

}