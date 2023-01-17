import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux'
import {simpleCounterReduxReducer} from './SimpleCounterRedux/simpleCounterReduxReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
    simpleCounterWithMaxValueReduxReducer
} from './SimpleCounterWithMaxValueRedux/simpleCounterWithMaxValueReduxReducer';
import {difficultCounterReduxValueReducer} from './DifficultCounterRedux/difficultCounterReduxValueReducer';
import {
    difficultCounterReduxFixedValueReducer,
} from './DifficultCounterRedux/difficultCounterReduxFixedValueReducer';

const rootReducer = combineReducers({
    simpleCounter: simpleCounterReduxReducer,
    simpleCounterWithMaxValue: simpleCounterWithMaxValueReduxReducer,
    difficultCounterReduxValue: difficultCounterReduxValueReducer,
    difficultCounterReduxFixedValue: difficultCounterReduxFixedValueReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch()
