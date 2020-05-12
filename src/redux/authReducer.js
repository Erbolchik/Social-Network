const SET_USER_DATA = 'SET-USER-DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const LOG_OUT = 'LOG-OUT'
const LOG_IN = 'LOG-IN'
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
                ...action.data,
                isAuth: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }
        case LOG_IN:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const logOut = () => ({ type: LOG_OUT })
export const logIn = () => ({ type: LOG_IN })



export default authReducer