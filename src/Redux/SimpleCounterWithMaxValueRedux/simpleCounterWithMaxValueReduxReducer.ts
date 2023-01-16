const initialStateWithMAxVal: InitialStateWithMAxValType = {
    val: 0,
    maxValue: 5,
    startValue: 0
}


export const simpleCounterWithMaxValueReduxReducer = (state: InitialStateWithMAxValType = initialStateWithMAxVal, action: inqACType | resetACType): InitialStateWithMAxValType => {
    switch (action.type) {
        case 'INQ-VAL':
            return {...state, val: state.val + 1}
        case 'RESET-VAL':
            return {...state, val: action.startValue}
        default:
            return {...state}
    }
}

//Action
export const inqValAC = () => ({type: 'INQ-VAL'} as const)
export const resetValAC = (startValue: number) => ({type: 'RESET-VAL',startValue} as const)


 type InitialStateWithMAxValType = {
    val: number
    maxValue: number
    startValue: number
}
export type inqACType = ReturnType<typeof inqValAC>
export type resetACType = ReturnType<typeof resetValAC>