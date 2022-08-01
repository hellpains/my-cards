import {AppRootStateType, AppThunk} from "../../app/store";
import {authAPI, UpdateProfileModelType} from "../../api/cards-api";

const initialState = {
    isInitialized: false,
    error: null as string | null,
    name: '',
    avatar: '',
    email: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case "APP/SET-IS-INITIALIZED": {
            return {...state, isInitialized: action.value}
        }
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        case "SET-PROFILE-INFO": {
            return {...state, ...action.data}
        }
        case "UPDATE-PROFILE": {
            return {...state, ...action.model}
        }
        default:
            return state
    }
}

// actions
export const setAppInitializedAC = (value: boolean) =>
    ({type: 'APP/SET-IS-INITIALIZED', value} as const)
export const setAppErrorAC = (error: null | string) =>
    ({type: 'APP/SET-ERROR', error} as const)
export const setProfileInfoAC = (data: ResponseType) =>
    ({type: 'SET-PROFILE-INFO', data} as const)
export const updateProfileAC = (model: UpdateDomainProfileModelType) =>
    ({type: 'UPDATE-PROFILE', model} as const)


// thunks
export const updateProfileTC = (domainModel: UpdateDomainProfileModelType): AppThunk => (dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const profile = state.profile

    const apiModel: UpdateProfileModelType = {
        name: profile.name,
        avatar: profile.avatar,
        ...domainModel
    }

    return authAPI.updatedProfile(apiModel)
        .then(res => {
            dispatch(updateProfileAC(apiModel))
        })
        .finally(() => {
                dispatch(setAppInitializedAC(true))
            }
        )
}


// types
type ResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}
export type InitialStateType = typeof initialState
export type ProfileActionsTypes =
    | ReturnType<typeof updateProfileAC>
    | ReturnType<typeof setProfileInfoAC>
    | ReturnType<typeof setAppInitializedAC>
    | ReturnType<typeof setAppErrorAC>

type UpdateDomainProfileModelType = {
    name?: string
    avatar?: string
}