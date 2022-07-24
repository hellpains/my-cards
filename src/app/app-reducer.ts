import {AppThunk} from "./store";
import {authAPI} from "../api/cards-api";

const initialState = {
    isInitialized: false,
}
export const appReducer = (state: InitialStateType = initialState, action: AppActionsTypes) => {
    switch (action.type) {
        case "APP/SET-IS-INITIALIZED":{
            return{ ...state,isInitialized: action.value}
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
            dispatch(setAppInitializedAC(true))
        })
}


// types
export type InitialStateType = typeof initialState
export type AppActionsTypes =
    |ReturnType<typeof setAppInitializedAC>