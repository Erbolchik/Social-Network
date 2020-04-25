let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, messagePost: 'Hi, how are you?', likesCount: 20, image: 'https://sun9-53.userapi.com/c7011/v7011899/39dd9/S_HqHziAwlQ.jpg' },
                { id: 2, messagePost: 'It is my first post', likesCount: 30, image: 'https://sun9-27.userapi.com/c543101/v543101419/3a889/UeMLymVUuPw.jpg' },
                { id: 3, messagePost: 'Naruto kun', likesCount: 10, image: 'https://sun9-10.userapi.com/c636425/v636425166/48d47/W9mfN_6ZBSg.jpg' }
            ],
            newPostText: 'this is yerbolski'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Yerbol' },
                { id: 2, name: 'Yergali' },
                { id: 3, name: 'Nurbol' },
                { id: 4, name: 'Yerasyl' },
                { id: 5, name: 'Askhat' },
                { id: 6, name: 'Ansar' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'its react' },
                { id: 4, message: 'its so hard' },
            ],
            newMessageText: 'Hi'
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Nurbol', image: 'https://sun9-32.userapi.com/c850224/v850224200/6be47/IuhLBv-1xSQ.jpg' },
                { id: 2, name: 'Yerasyl', image: 'https://sun9-9.userapi.com/c845523/v845523508/105dd4/tRjPLaWk0vQ.jpg' },
                { id: 3, name: 'Askhat', image: 'https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg' }
            ]
        }
    },
    getState() { 
        return this._state;
    },
    _callSubscriber() {
        console.log("state is changes")
    },
    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         messagePost: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         image: 'https://sun9-26.userapi.com/c854416/v854416230/9f581/3pBxi6uE9ak.jpg'
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._callSubscriber(this._state);
    //     this._state.profilePage.newPostText = ''
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._callSubscriber(this._state)
    //     this._state.dialogsPage.newMessageText = ''
    // },
    // updateNewMessage (newMessage)  {
    //     this._state.dialogsPage.newMessageText = newMessage
    //     this._callSubscriber(this._state);
    // },
    subscribe  (observer)  {
        this._callSubscriber = observer
    },
    dispatch (action){
        if(action.type==='ADD-POST'){
            let newPost = {
                id: 4,
                messagePost: this._state.profilePage.newPostText,
                likesCount: 0,
                image: 'https://sun9-26.userapi.com/c854416/v854416230/9f581/3pBxi6uE9ak.jpg'
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = ''
        } else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if(action.type==='ADD-MESSAGE'){
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)
            this._state.dialogsPage.newMessageText = ''
        } else if(action.type==='UPDATE-NEW-MESSAGE'){
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state);
        }
    }

}


window.store = store


export default store;




    
