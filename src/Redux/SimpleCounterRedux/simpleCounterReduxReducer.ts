const initialState: InitialStateType = {
    value: 0
}


export const simpleCounterReduxReducer = (state: InitialStateType = initialState, action: inqACType | resetACType) => {
    switch (action.type) {
        case 'INQ':
            return {...state, value: action.value + 1}
        case 'RESET':
            return {...state, value: 0}
        default:
            return {...state}
    }
}

//Action
export const inqAC = (value: number) => ({type: 'INQ', value} as const)
export const resetAC = () => ({type: 'RESET'} as const)


export type InitialStateType = {
    value: number
}
export type inqACType = ReturnType<typeof inqAC>
export type resetACType = ReturnType<typeof resetAC>