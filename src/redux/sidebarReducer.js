const ADD_FRIENDS='ADD-FRIENDS'
const UPDATE_NEW_NAME_TEXT='UPDATE-NEW-NAME-TEXT'
let initialState = {
    friends: [
        { id: 1, name: 'Nurbol', image: 'https://sun9-32.userapi.com/c850224/v850224200/6be47/IuhLBv-1xSQ.jpg' },
        { id: 2, name: 'Yerasyl', image: 'https://sun9-9.userapi.com/c845523/v845523508/105dd4/tRjPLaWk0vQ.jpg' },
        { id: 3, name: 'Askhat', image: 'https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg' }
    ],
    newNameText:''
}

const fuckerReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_FRIENDS:{
            let newFriends={
                id:4,
                name:state.newNameText,
                image:'https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg'
            }
            let stateCopy = {...state}
            stateCopy.friends=[...state.friends]
            stateCopy.friends.push(newFriends)
            stateCopy.newNameText=''
            return stateCopy
        }
        case UPDATE_NEW_NAME_TEXT:{
            let stateCopy={...state}
            stateCopy.newNameText=action.newName
            return stateCopy
        }
        default:
            return state
    }
}


export const addFriends=()=>({type:ADD_FRIENDS})

export const updateNewNameText=(newNameText)=>({
    type:UPDATE_NEW_NAME_TEXT,newName:newNameText
})



export default fuckerReducer;