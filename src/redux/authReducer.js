import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = 'auth/SET-USER-DATA'
const TOGGLE_IS_FETCHING = 'auth/TOGGLE-IS-FETCHING'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.auth()
    
    if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
        
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } 
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message })) // Какую форму стопаем ,// 2 параметр проблемные свойства
    }
}
export const logout = () => async dispatch => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer