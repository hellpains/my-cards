import {AppThunk} from "./store";
import {authAPI} from "../api/cards-api";
import {setIsLoggedInAC} from "../features/Login/login-reducer";
import {setProfileInfoAC} from "../features/Profile/profile-reducer";

const initialState = {
    isInitialized: false,
}
export const appReducer = (state: InitialStateType = initialState, action: AppActionsTypes) => {
    switch (action.type) {
        case "APP/SET-IS-INITIALIZED": {
            return {...state, isInitialized: action.value}
        }
        default:
            return state
    }
}

// actions
export const setAppInitializedAC = (value: boolean) => ({
    type: 'APP/SET-IS-INITIALIZED',
    value
} as const)


// thunks
export const initializeAppTC = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then(res => {
            dispatch(setProfileInfoAC(res.data))
            dispatch(setIsLoggedInAC(true))
        })
        .finally(() => {
            dispatch(setAppInitializedAC(true))
        })
}


// types
export type InitialStateType = typeof initialState
export type AppActionsTypes =
    |ReturnType<typeof setAppInitializedAC>