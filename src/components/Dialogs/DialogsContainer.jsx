import React from 'react'
import style from './Dialogs.module.css'
import Dialogs from './Dialogs'
import { sendMessageActionCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Dialogs)
