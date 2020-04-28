import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessageActionCreator,updateNewMessageActionCreator} from '../../redux/dialogsReducer'


const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs.map(el => <Dialog name={el.name} id={el.id} activeClassName={style.activeLink} />)
    let messages = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} />);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onChangeMessage = (e) => {
        let newMessage = e.target.value
        props.dispatch(updateNewMessageActionCreator(newMessage));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}

            </div>
            <div className={style.messages}>
                {messages}
                <div>
                    <textarea  onChange={onChangeMessage} value={props.dialogsPage.newMessageText}></textarea>
                </div>
                <button onClick={sendMessage}>Отправить сообщение</button> 
            </div>
        </div>
    )
}

export default Dialogs