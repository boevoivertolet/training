import React  from 'react';



type CounterPropsType ={
    maxValue: number
    minValue: number
    toMinValue:()=> void
    value:number
    plusOneFN:()=> void
}

export const Counter = (props: CounterPropsType) => {


    return (
        <div className={'App'}>
            <div>
                <div className={props.value === props.maxValue ? 'red' : 'table'}>{props.value}</div>
                <button disabled={props.value === props.maxValue} onClick={() => {
                    props.plusOneFN()
                }}>+1
                </button>

                <button disabled={props.value === props.minValue} onClick={() => {
                    props.toMinValue()
                }}>reset
                </button>
            </div>
            <div>
            </div>
        </div>
    )

}