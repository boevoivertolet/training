import {Dispatch} from 'redux';
import {changeValueAC2, setValueAC2} from './difficultCounter2ReduxValueReducer';
import {RootAppActionsType} from '../CounterStore';
import {FixedValueType} from './DifficultCounter2Redux';

const initialState: Array<InitialStateType> = [{midMaxVal: 0, midMinVal: 0, mod: false}]


export const difficultCounter2ReduxFixedValueReducer = (state: Array<InitialStateType> = initialState, action: RootAppActionsType): Array<InitialStateType> => {
    switch (action.type) {
        case '2/CHANGE-FIXED-MAX-VALUE':
            return [{...state[0], midMaxVal: action.fixMaxVal}]
        case '2/CHANGE-FIXED-MIN-VALUE':
            return [{...state[0], midMinVal: action.fixMinVal}]
        case '2/SET-FIXED-VALUE':
            return [{...state[0], midMaxVal: action.fixMaxValue, midMinVal: action.fixMinValue}]
        case '2/SET-MOD':
            return [{...state[0], mod: action.mod}]
        default:
            return [...state]
    }
}

//Action
export const changeFixedMaXValueAC2 = (fixMaxVal: number) => ({type: '2/CHANGE-FIXED-MAX-VALUE', fixMaxVal} as const)
export const changeFixedMinValueAC2 = (fixMinVal: number) => ({type: '2/CHANGE-FIXED-MIN-VALUE', fixMinVal} as const)
export const setFixedValueAC2 = (fixMaxValue: number | string, fixMinValue: number | string) => ({
    type: '2/SET-FIXED-VALUE',
    fixMaxValue,
    fixMinValue
} as const)
export const setModAC2 = (mod: boolean) => ({type: '2/SET-MOD', mod} as const)

// Thunk
export const setValueWithFixedValueTC2 = (value: number | string) => (dispatch: Dispatch<RootAppActionsType>) => {
    let fixMaxValue = localStorage.getItem('fixMaxValue')
    let fixMinValue = localStorage.getItem('fixMinValue')
    if (fixMaxValue && fixMinValue) {
        dispatch(setFixedValueAC2(Number(fixMaxValue), Number(fixMinValue)))
        dispatch(setValueAC2(Number(fixMaxValue), Number(fixMinValue), Number(value)))
    }
}
export const setModTC2 = (mod: boolean) => (dispatch: Dispatch<RootAppActionsType>) => {
    dispatch(setModAC2(!mod))
}
export const changeFixedMaXValueTC2 = (fixMaxVal: number, fv:FixedValueType[]) => (dispatch: Dispatch<RootAppActionsType>) => {
    dispatch(changeFixedMaXValueAC2(fixMaxVal))
    if (fixMaxVal <= fv[0].midMinVal || fixMaxVal < 0) {
        dispatch(changeValueAC2('incorrect value'))
    } else {
        dispatch(changeValueAC2('enter values and press "set"'))
    }
}
export const changeFixedMinValueTC2 = (fixMinVal: number, fv:FixedValueType[]) => (dispatch: Dispatch<RootAppActionsType>) => {
    dispatch(changeFixedMinValueAC2(fixMinVal))
    if (fv[0].midMaxVal <= fixMinVal || fixMinVal < 0) {
        dispatch(changeValueAC2('incorrect value'))
    } else {
        dispatch(changeValueAC2('enter values and press "set"'))
    }
}



export type InitialStateType = {
    midMaxVal: number | string
    midMinVal: number | string
    mod: boolean

}
type changeFixedMaXValueAC2Type = ReturnType<typeof changeFixedMaXValueAC2>
type changeFixedMinValueAC2Type = ReturnType<typeof changeFixedMinValueAC2>
type setFixedValueAC2Type = ReturnType<typeof setFixedValueAC2>
type setModAC2Type = ReturnType<typeof setModAC2>

export type DiffCounter2ActionType =
    | changeFixedMaXValueAC2Type
    | setFixedValueAC2Type
    | changeFixedMinValueAC2Type
    | setModAC2Type
