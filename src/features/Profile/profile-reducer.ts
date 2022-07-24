import {AppRootStateType, AppThunk} from "../../app/store";
import {authAPI, UpdateProfileModelType} from "../../api/cards-api";

const initialState = {
    name: 'name not found',
    avatar: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case "UPDATE-PROFILE": {
            return {...state, ...action.model}
        }
        default:
            return state
    }
}

// actions
export const updateProfileAC = (model: UpdateDomainProfileModelType) => ({
    type: 'UPDATE-PROFILE',
    model
} as const)


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
}


// types
export type InitialStateType = typeof initialState
export type ProfileActionsTypes =
    |ReturnType<typeof updateProfileAC>

type UpdateDomainProfileModelType = {
    title?: string
    avatar?: string
}