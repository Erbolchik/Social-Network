const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            let stateCopy = { ...state }
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.newMessage
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE, newMessage: message
})


export default dialogsReducer
