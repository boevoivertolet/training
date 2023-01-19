import {AnyAction, applyMiddleware, combineReducers} from 'redux';
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
import {
    DiffCounter2ActionType,
    difficultCounter2ReduxFixedValueReducer
} from './DifficultCounter2Redux/difficultCounter2ReduxFixedValueReducer';
import {difficultCounter2ReduxValueReducer} from './DifficultCounter2Redux/difficultCounter2ReduxValueReducer';
import thunk, {ThunkDispatch} from 'redux-thunk';




const rootReducer = combineReducers({
    simpleCounter: simpleCounterReduxReducer,
    simpleCounterWithMaxValue: simpleCounterWithMaxValueReduxReducer,
    difficultCounterReduxValue: difficultCounterReduxValueReducer,
    difficultCounter2ReduxValue: difficultCounter2ReduxValueReducer,
    difficultCounterReduxFixedValue: difficultCounterReduxFixedValueReducer,
    difficultCounter2ReduxFixedValue: difficultCounter2ReduxFixedValueReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>()
export type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export type  RootAppActionsType = DiffCounter2ActionType
export type ThunkDispatchType = RootAppActionsType

