import {Dispatch} from 'redux';
import {RootAppActionsType} from '../CounterStore';
import {FixedValueType, ValueType} from './DifficultCounter2Redux';

const initialState: Array<InitialStateType> = [
    {
        value: 'press "set"',
        minValue: 0,
        maxValue: 0
    }
]


export const difficultCounter2ReduxValueReducer = (state: Array<InitialStateType> = initialState, action: ValueActionType): Array<InitialStateType> => {
    switch (action.type) {
        case '2/CHANGE-VALUE':
            return [{...state[0], value: typeof action.value === 'string' ? action.value : action.value + 1}]
        case '2/RESET-VALUE':
            return [{...state[0], value: state[0].minValue}]
        case '2/SET-VALUE':
            return [{...state[0], maxValue: action.midMaxVal, minValue: action.midMinVal, value: action.midMinVal}]
        default:
            return [...state]
    }
}

//Action
export const changeValueAC2 = (value: number | string) => ({type: '2/CHANGE-VALUE', value} as const)
export const setValueAC2 = (midMaxVal: number | string, midMinVal: number | string, value: number | string) => ({
    type: '2/SET-VALUE',
    midMaxVal,
    midMinVal,
    value
} as const)
export const resetAC2 = () => ({type: '2/RESET-VALUE'} as const)

//Thunk
export const setValueTC2 = (fv: FixedValueType[]) => (dispatch: Dispatch<RootAppActionsType>) => {
    dispatch(setValueAC2(fv[0].midMaxVal, fv[0].midMinVal, fv[0].midMinVal))
    localStorage.setItem('fixMaxValue', JSON.stringify(fv[0].midMaxVal))
    console.log(localStorage.getItem('fixMaxValue'))
    localStorage.setItem('fixMinValue', JSON.stringify(fv[0].midMinVal))
    console.log(localStorage.getItem('fixMinValue'))

}
export const resetTC2 = () => (dispatch: Dispatch<RootAppActionsType>) => {
    dispatch(resetAC2())

}
export const changeValueTC2 = (value: ValueType[], maxValue: number | string) => (dispatch: Dispatch<RootAppActionsType>) => {
    if (value[0].value < maxValue) {
        dispatch(changeValueAC2(Number(value[0].value)))
    }


}


export type InitialStateType = {
    value: number | string
    minValue: number | string
    maxValue: number | string

}

export type ValueActionType = changeValueAC2Type | setValueAC2Type | resetAC2Type
type changeValueAC2Type = ReturnType<typeof changeValueAC2>
type setValueAC2Type = ReturnType<typeof setValueAC2>
type resetAC2Type = ReturnType<typeof resetAC2>