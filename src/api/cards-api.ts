import axios from "axios";

export const cardsAPI = {
    // getTodolists() {
    //     return instance.get<TodolistType[]>(`todo-lists`)
    // },

}

export const authAPI = {
    register(data: any) {
        return instance.post('auth/register', data)
    },

    // отправить на сервер email, password and rememberMe
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password,rememberMe})
    },

    // отправить на сервер пустой объект
    logout() {
        return instance.delete('auth/me')
    },

    // отправить на сервер пустой объект
    me() {
        return instance.post('auth/me')
    },

    // отправить на сервер name or avatar (url or base64)
    updatedProfile(apiModel:UpdateProfileModelType) {
        return instance.put('/auth/me',apiModel)
    },

    // отправить на сервер email, from, message
    forgotPassword() {
        return instance.post('auth/me')
    },

}

// types
export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}
export type UpdateProfileModelType={
    name:string,
    avatar:string,
}


// settings
export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})