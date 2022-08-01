import {AppThunk} from "../../../app/store";
import {authAPI} from "../../../api/cards-api";
import {handleServerNetworkError} from "../../../utils/error-utils";
// import {setCheckEmailAC} from "../ForgotPassword/forgotReducer";

const initialState = {}

export const newPasswordReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

// actions


// thunks
export const setNewPasswordTC = (password: string,token:any): AppThunk => (dispatch) => {
    authAPI.setNewPassword(password,token)
        .then(res=>{
            // dispatch(setCheckEmailAC(false))
        })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
            // dispatch(setCheckEmailAC(false))
        })
}


// types
export type InitialStateType = typeof initialState