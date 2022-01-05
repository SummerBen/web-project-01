import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Keks' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Diman' },
        { id: 4, name: 'Andrew' },
        { id: 5, name: 'Nixxon' }
    ]

    let messages = [
        { id: 1, message: 'С новым годом, гнида!' },
        { id: 2, message: 'Слава роду славянскому!' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;