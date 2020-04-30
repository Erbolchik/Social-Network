import React from 'react'
import style from './Dialogs.module.css'
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import {connect} from 'react-redux'



let mapStateToProps = (state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator());
        },
        updateNewMessage : (newMessage)=>{
            dispatch(updateNewMessageActionCreator(newMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs); 

export default DialogsContainer