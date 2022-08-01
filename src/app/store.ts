import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {LoginActionsTypes, loginReducer} from "../features/Login/login-reducer";
import {ProfileActionsTypes, profileReducer} from "../features/Profile/profile-reducer";
import {AppActionsTypes, appReducer} from "./app-reducer";
import {ForgotActionsTypes, forgotReducer} from "../features/ForgotPassword/forgotReducer";
import {registerReducer} from "../features/Registration/register-reducer";

export const rootReducer = combineReducers({
    registration: registerReducer,
    login: loginReducer,
    app: appReducer,
    profile: profileReducer,
    forgot: forgotReducer,
})
export type DispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()


export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>


export type AppRootActionsType = LoginActionsTypes | ProfileActionsTypes | AppActionsTypes | ForgotActionsTypes

// @ts-ignore
window.store = store;