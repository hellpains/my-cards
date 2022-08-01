import {AppThunk} from "../../app/store";
import {authAPI} from "../../api/cards-api";
import { handleServerNetworkError } from "../../utils/error-utils";

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsTypes) => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.value}
        }
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN',
    value
})

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}
export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
        })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}


// types
export type InitialStateType = typeof initialState
export type LoginActionsTypes =
    |ReturnType<typeof setIsLoggedInAC>