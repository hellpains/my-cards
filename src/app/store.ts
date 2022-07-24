import {AnyAction, combineReducers, createStore} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const rootReducer = combineReducers({

})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



export type DispatchType  = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>




export type AppRootActionsType=any

// @ts-ignore
window.store = store;