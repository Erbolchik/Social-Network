import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    posts: [
        { id: 1, messagePost: 'Hi, how are you?', likesCount: 20, image: 'https://sun9-53.userapi.com/c7011/v7011899/39dd9/S_HqHziAwlQ.jpg' },
        { id: 2, messagePost: 'It is my first post', likesCount: 30, image: 'https://sun9-27.userapi.com/c543101/v543101419/3a889/UeMLymVUuPw.jpg' },
        { id: 3, messagePost: 'Naruto kun', likesCount: 10, image: 'https://sun9-10.userapi.com/c636425/v636425166/48d47/W9mfN_6ZBSg.jpg' }
    ],
    newPostText: '',
    profile:null,
    isFetching:true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                messagePost: state.newPostText,
                likesCount: 0,
                image: 'https://sun9-26.userapi.com/c854416/v854416230/9f581/3pBxi6uE9ak.jpg'
            };
            return {
                ...state,
                posts: [...state.posts, newPost], // push new element in the end 
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }
        case TOGGLE_IS_FETCHING:
            return{
                    ...state,
                    isFetching:action.isFetching
            }
        default:
            return state
    }
}

export const addingPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export const getProfile=(userId)=>{
    return dispatch=>{
        dispatch(setIsFetching(true));
        if(!userId)userId=7916; 
        usersAPI.getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response));
            dispatch(setIsFetching(true));
        })
    }
}

export default profileReducer