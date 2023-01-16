import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux'
import {inqACType, resetACType, simpleCounterReduxReducer} from './simpleCounterReduxReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
    simpleCounterWithMaxValueReduxReducer
} from '../SimpleCounterWithMaxValueRedux/simpleCounterWithMaxValueReduxReducer';

const rootReducer = combineReducers({
    simpleCounter: simpleCounterReduxReducer,
    simpleCounterWithMaxValue: simpleCounterWithMaxValueReduxReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch()
export type AppDispatchType = inqACType | resetACType