import {Dispatch} from "redux";
import {AppRootActionsType} from "../app/store";
import {setAppErrorAC} from "../features/Profile/profile-reducer";

//
// export const handleServerAppError = (data: any, dispatch: Dispatch<AppRootActionsType>) => {
//     if (data.messages.length) {
//         dispatch(setAppError(data.messages[0]))
//     } else {
//         dispatch(setAppError('Some error occurred'))
//     }
//     // dispatch(setAppStatus('failed'))
// }


export const handleServerNetworkError = (error: any, dispatch: Dispatch<AppRootActionsType>) => {
    dispatch(setAppErrorAC(error.response.data.error ? error.response.data.error : 'Some error occurred'))
    // dispatch(setAppStatus('failed'))
}