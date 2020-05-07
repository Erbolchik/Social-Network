const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => { //Пробегаемся по массиву для того чтобы изменить статус подписки 
                    if (el.id === action.userId) {
                        return { ...el, followed: true } // Сначала делаем копию массива потом меняем ему статус
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false }
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })


export default usersReducer