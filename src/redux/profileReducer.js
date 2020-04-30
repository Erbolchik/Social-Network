const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        posts: [
            { id: 1, messagePost: 'Hi, how are you?', likesCount: 20, image: 'https://sun9-53.userapi.com/c7011/v7011899/39dd9/S_HqHziAwlQ.jpg' },
            { id: 2, messagePost: 'It is my first post', likesCount: 30, image: 'https://sun9-27.userapi.com/c543101/v543101419/3a889/UeMLymVUuPw.jpg' },
            { id: 3, messagePost: 'Naruto kun', likesCount: 10, image: 'https://sun9-10.userapi.com/c636425/v636425166/48d47/W9mfN_6ZBSg.jpg' }
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                messagePost: state.newPostText,
                likesCount: 0,
                image: 'https://sun9-26.userapi.com/c854416/v854416230/9f581/3pBxi6uE9ak.jpg'
            };
            let stateCopy = {...state}
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        }
            case UPDATE_NEW_POST_TEXT: {
            let stateCopy={...state}
            stateCopy.newPostText=action.newText
            return stateCopy
            };
        default:
            return state
    }
}

export const addingPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,newText: text
})

export default profileReducer