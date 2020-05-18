import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router'


const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} activeClassName={style.activeLink} key={el.id} />)
    let messages = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

    let onSendMessage = () => {
        props.sendMessage()
    }
    let onChangeMessage = (e) => {
        let newMessage = e.target.value
        props.updateNewMessage(newMessage);
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
                <button onClick={onSendMessage}>Отправить сообщение</button> 
            </div>
        </div>
    )
}

export default Dialogs