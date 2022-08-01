import {AppThunk} from "../../app/store";
import {authAPI} from "../../api/cards-api";
import { handleServerNetworkError } from "../../utils/error-utils";

const initialState = {
    isRegistered: false,
}

export const registerReducer = (state: InitialStateType = initialState, action: LoginActionsTypes) => {
    switch (action.type) {
        case "register/SET-IS-REGISTERED": {
            return {...state, isRegistered: action.value}
        }
        default:
            return state
    }
}

// actions
export const setIsRegisteredAC = (value: boolean) => ({
    type: 'register/SET-IS-REGISTERED',
    value
} as const)


// // thunks
export const registerTC = (data: any): AppThunk => (dispatch) => {
    authAPI.register(data)
        .then(res => {
            dispatch(setIsRegisteredAC(true))
        })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}



// types
export type InitialStateType = typeof initialState
export type LoginActionsTypes =
    | ReturnType<typeof setIsRegisteredAC>