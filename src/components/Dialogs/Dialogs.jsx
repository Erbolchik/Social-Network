import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControl/FormsControl'
import { required, maxLengthCreator } from '../../utils/validators/validator'

const maxLength10=maxLengthCreator(10)

const sendMessageForm = (props) => {
    return (
        <div className={style.messages}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type='textarea' 
                    component={Textarea} 
                    name='newMessageBody' 
                    placeholder="Enter your message"
                    validate={[required,maxLength10]}/>
                </div>
                <button>Отправить сообщение</button>
            </form>
        </div>
    )
}

const SendMessageReduxForm = reduxForm({ form: 'messageForm' })(sendMessageForm)

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} activeClassName={style.activeLink} key={el.id} />)
    let messages = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} key={el.id} />);
    
    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div>
                {messages}
                <SendMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs
