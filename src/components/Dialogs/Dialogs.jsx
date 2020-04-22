import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {
    

    let dialogs = props.dialogs.map(el => <Dialog name={el.name} id={el.id} activeClassName={style.activeLink} />)
    let messages = props.messages.map(el => <Message message={el.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs