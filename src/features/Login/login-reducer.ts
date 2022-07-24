import {AppThunk} from "../../app/store";
import {authAPI} from "../../api/cards-api";

const initialState = {}

export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsTypes) => {
    switch (action.type) {
        default:
            return state
    }
}

// actions


// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            // dispatch()
        })
}


// types
export type InitialStateType = typeof initialState
export type LoginActionsTypes = any