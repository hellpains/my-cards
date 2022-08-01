import {AppThunk} from "../../app/store";
import {authAPI} from "../../api/cards-api";
import {handleServerNetworkError} from "../../utils/error-utils";

const initialState = {
    isCheckEmail: false,
}

export const forgotReducer = (state: InitialStateType = initialState, action: ForgotActionsTypes) => {
    switch (action.type) {
        case "SET-CHECK-EMAIL": {
            return {...state, isCheckEmail: action.value}
        }
        default:
            return state
    }
}

// actions
export const setCheckEmailAC = (value: boolean) => ({
    type: 'SET-CHECK-EMAIL',
    value
})

// thunks
export const forgotPasswordTC = (email: string): AppThunk => (dispatch) => {

    authAPI.forgotPassword(email)
        .then(res => {
            dispatch(setCheckEmailAC(true))
        })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
            dispatch(setCheckEmailAC(false))
        })
}


// types
export type InitialStateType = typeof initialState
export type ForgotActionsTypes =
    |ReturnType<typeof setCheckEmailAC>