import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.store.state.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElements = props.store.state.dialogsPage.messagesData.map(m => <Message message={m.message} myMessage={m.myMessage} avatar={m.avatar} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.store.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.store.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.store.newMessageText} />
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;