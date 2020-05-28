const SEND_MESSAGE = 'SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = { id: 5, message: action.newMessageBody }
            return {
                ...state,
                messages: [...state.messages, newMessage], // добавляем новый элемент  в массив 
            }
        default:
            return state;
    }
}
export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer
