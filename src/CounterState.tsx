import React from 'react';
import {FixedValueType, ValueType} from './DifficultCounter';
import {UniversalButton} from './UniversalButton';


type CounterPropsType = {
    fv: FixedValueType[]
    value: ValueType[]
    plusOneFN: () => void
    toMinValue: () => void
}

// export const CounterState = (props: CounterPropsType) => {
//     let value = props.value[0].value
//     let maxValue = props.value[0].maxValue
//     let minValue = props.value[0].minValue
//     let midMaxVal = props.fv[0].midMaxVal
//     let midMinVal = props.fv[0].midMinVal
//
//
//     return (
//         <div className={'App'}>
//             <div>
//                 <div
//                     className={value === maxValue || typeof value === 'string' ? 'red' : 'table'}>{maxValue !== 0 ? value : 'enter values and press "set"' && midMaxVal === maxValue && midMinVal === minValue || midMaxVal <= midMinVal || midMaxVal < 0 || midMinVal < 0 ? 'incorrect value' : 'enter values and press "set"'}</div>
//                 <button disabled={value === maxValue} onClick={() => {
//                     props.plusOneFN()
//                 }}>inc
//                 </button>
//                 <button onClick={() => {
//                     props.toMinValue()
//                 }}>reset
//                 </button>
//             </div>
//             <div>
//                 <UniversalButton title={'inc'}/>
//                 <UniversalButton title={'reset'} />
//             </div>
//         </div>
//     )
//
// }

export const CounterState = (props: CounterPropsType) => {
    let value = props.value[0].value
    let maxValue = props.value[0].maxValue
    let minValue = props.value[0].minValue
    let midMaxVal = props.fv[0].midMaxVal
    let midMinVal = props.fv[0].midMinVal


    return (
        <div className={'App'}>
            <div>
                <div className={value === maxValue || typeof value === 'string' ? 'red' : 'table'}>
                    {/*{maxValue !== 0 ? value : 'enter values and press "set"' && midMaxVal === maxValue && midMinVal === minValue || midMaxVal <= midMinVal || midMaxVal < 0 || midMinVal < 0 ? 'incorrect value' : 'enter values and press "set"'}*/}
                    {value}
                </div>
                <UniversalButton title={'inc'} value={props.value} plusOneFN={props.plusOneFN}/>
                <button onClick={() => {
                    props.toMinValue()
                }}>reset
                </button>
            </div>
            <div>

                {/*<UniversalButton title={'reset'} />*/}
            </div>
        </div>
    )

}

