const initialState: Array<InitialStateType> = [
    {
        value: 'enter values and press "set"',
        minValue: 0,
        maxValue: 0
    }
]


export const difficultCounter2ReduxValueReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
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


export type InitialStateType = {
    value: number | string
    minValue: number | string
    maxValue: number | string

}

type ActionType = changeValueAC2Type | setValueAC2Type | resetAC2Type
type changeValueAC2Type = ReturnType<typeof changeValueAC2>
type setValueAC2Type = ReturnType<typeof setValueAC2>
type resetAC2Type = ReturnType<typeof resetAC2>