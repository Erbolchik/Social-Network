import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs.map(el => <Dialog name={el.name} id={el.id} activeClassName={style.activeLink} />)
    let messages = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch({type:'ADD-MESSAGE'});
    }
    let onChangeMessage = () => {
        let newMessage = newMessageElement.current.value
        props.dispatch({type:'UPDATE-NEW-MESSAGE',newMessage:newMessage});
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}

            </div>
            <div className={style.messages}>
                {messages}
                <div>
                    <textarea ref={newMessageElement} onChange={onChangeMessage} value={props.dialogsPage.newMessageText}></textarea>
                </div>
                <button onClick={sendMessage}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs