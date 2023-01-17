const initialState: Array<InitialStateType> = [
    {
        value: 'enter values and press "set"',
        minValue: 0,
        maxValue: 0
    }
]


export const difficultCounterReduxValueReducer = (state: Array<InitialStateType> = initialState, action: changeValueACType | resetACType | setValueACType): Array<InitialStateType> => {
    switch (action.type) {
        case 'CHANGE-VALUE':
            return [{...state[0], value: typeof action.value === 'string' ? action.value : action.value + 1}]
        case 'RESET-VALUE':
            return [{...state[0], value: state[0].minValue}]
        case 'SET-VALUE':
            return [{...state[0], maxValue: action.midMaxVal, minValue: action.midMinVal, value: action.midMinVal}]
        default:
            return [...state]
    }
}

//Action
export const changeValueAC = (value: number | string) => ({type: 'CHANGE-VALUE', value} as const)
export const setValueAC = (midMaxVal: number | string, midMinVal: number | string, value: number | string) => ({
    type: 'SET-VALUE',
    midMaxVal,
    midMinVal,
    value
} as const)
export const resetAC = () => ({type: 'RESET-VALUE'} as const)


export type InitialStateType = {
    value: number | string
    minValue: number | string
    maxValue: number | string

}
type changeValueACType = ReturnType<typeof changeValueAC>
type setValueACType = ReturnType<typeof setValueAC>
type resetACType = ReturnType<typeof resetAC>