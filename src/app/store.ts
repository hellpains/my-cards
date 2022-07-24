import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {LoginActionsTypes, loginReducer} from "../features/Login/login-reducer";
import {ProfileActionsTypes, profileReducer} from "../features/Profile/profile-reducer";
import {AppActionsTypes, appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app:appReducer,
    profile:profileReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


export type DispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>


export type AppRootActionsType = LoginActionsTypes | ProfileActionsTypes | AppActionsTypes

// @ts-ignore
window.store = store;