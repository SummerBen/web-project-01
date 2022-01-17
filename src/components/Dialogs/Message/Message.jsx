import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={props.myMessage == true ? s.myMessage : s.notMyMessage}>{props.message}</div>
    )
}


export default Message;