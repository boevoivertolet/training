const initialState: Array<InitialStateType> = [{midMaxVal: 0, midMinVal: 0}]


export const difficultCounterReduxFixedValueReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
    switch (action.type) {
        case 'CHANGE-FIXED-MAX-VALUE':
            return [{...state[0], midMaxVal: action.fixMaxVal}]
        case 'CHANGE-FIXED-MIN-VALUE':
            return [{...state[0], midMinVal: action.fixMinVal}]
        case 'SET-FIXED-VALUE':
            return [{...state[0], midMaxVal: action.fixMaxValue, midMinVal: action.fixMinValue}]
        default:
            return [...state]
    }
}

//Action
export const changeFixedMaXValueAC = (fixMaxVal: number) => ({type: 'CHANGE-FIXED-MAX-VALUE', fixMaxVal} as const)
export const changeFixedMinValueAC = (fixMinVal: number) => ({type: 'CHANGE-FIXED-MIN-VALUE', fixMinVal} as const)
export const setFixedValueAC = (fixMaxValue: number | string, fixMinValue: number | string) => ({
    type: 'SET-FIXED-VALUE',
    fixMaxValue,
    fixMinValue
} as const)
export const resetAC = () => ({type: 'RESET-VALUE'} as const)


export type InitialStateType = {
    midMaxVal: number | string
    midMinVal: number | string

}
type ActionType = changeFixedMaXValueACType | setFixedValueACType| changeFixedMinValueACType

type changeFixedMaXValueACType = ReturnType<typeof changeFixedMaXValueAC>
type changeFixedMinValueACType = ReturnType<typeof changeFixedMinValueAC>
type setFixedValueACType = ReturnType<typeof setFixedValueAC>
type resetACType = ReturnType<typeof resetAC>