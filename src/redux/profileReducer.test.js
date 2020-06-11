import profileReducer, { addingPostActionCreator,deletePost } from './profileReducer'

let state = {
    posts: [
        { id: 1, messagePost: 'Hi, how are you?', likesCount: 20, image: 'https://sun9-53.userapi.com/c7011/v7011899/39dd9/S_HqHziAwlQ.jpg' },
        { id: 2, messagePost: 'It is my first post', likesCount: 30, image: 'https://sun9-27.userapi.com/c543101/v543101419/3a889/UeMLymVUuPw.jpg' },
        { id: 3, messagePost: 'Naruto kun', likesCount: 10, image: 'https://sun9-10.userapi.com/c636425/v636425166/48d47/W9mfN_6ZBSg.jpg' }
    ]
}

it('length of new posts should be added incremented ',()=>{
    //1. start test data
    let action = addingPostActionCreator("Hello,Yerbolski")
    //2. action
    let newState=profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(4);
})


it('messages of new posts should be correct ',()=>{
    //1. start test data
    let action = addingPostActionCreator("Hello,Yerbolski")
    //2. action
    let newState=profileReducer(state,action)
    //3. expectation
    expect(newState.posts[3].messagePost).toBe("Hello,Yerbolski")

})

it('after deleting length posts should be decremented ',()=>{
    //1. start test data
    let action = deletePost(1)
    //2. action
    let newState=profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(2)

})

