const initialState: Array<InitialStateType> = [{midMaxVal: 0, midMinVal: 0, mod: false}]


export const difficultCounter2ReduxFixedValueReducer = (state: Array<InitialStateType> = initialState, action: DiffCounter2ActionType): Array<InitialStateType> => {
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
/*
export const changeFixedMaXValueTC2 = () => (dispatch: Dispatch<DiffCounter2ActionType>) => {
    let fixMaxValue = localStorage.getItem('fixMaxValue')
    let fixMinValue = localStorage.getItem('fixMinValue')
    if (fixMaxValue && fixMinValue) {
        dispatch(setFixedValueAC2(fixMaxValue, fixMinValue))
    }
}
*/


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
