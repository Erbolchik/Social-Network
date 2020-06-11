import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_USER_STATUS = 'SET-USER-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts: [
        { id: 1, messagePost: 'Hi, how are you?', likesCount: 20, image: 'https://sun9-53.userapi.com/c7011/v7011899/39dd9/S_HqHziAwlQ.jpg' },
        { id: 2, messagePost: 'It is my first post', likesCount: 30, image: 'https://sun9-27.userapi.com/c543101/v543101419/3a889/UeMLymVUuPw.jpg' },
        { id: 3, messagePost: 'Naruto kun', likesCount: 10, image: 'https://sun9-10.userapi.com/c636425/v636425166/48d47/W9mfN_6ZBSg.jpg' }
    ],
    profile: null,
    isFetching: true,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                messagePost: action.newPostBody,
                likesCount: 0,
                image: 'https://sun9-26.userapi.com/c854416/v854416230/9f581/3pBxi6uE9ak.jpg'
            };
            return {
                ...state,
                posts: [...state.posts, newPost], // push new element in the end 
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DELETE_POST:{
            return {
                ...state,
                posts:state.posts.filter(p=>p.id!==action.postId)
            }
        }

        default:
            return state
    }
}

export const addingPostActionCreator = (newPostBody) => ({ type: ADD_POST,newPostBody:newPostBody })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost=(postId)=>({type:DELETE_POST,postId:postId})

export const getProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer