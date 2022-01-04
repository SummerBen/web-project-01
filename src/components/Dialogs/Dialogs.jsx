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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Keks" id='1' />
                <DialogItem name="Marina" id='2' />
                <DialogItem name="Diman" id='3' />
                <DialogItem name="Andrew" id='4' />
                <DialogItem name="Nixxon" id='5' />
            </div>
            <div className={s.messages}>
                <Message message="С новым годом, гнида!" />
                <Message message="Слава роду славянскому!" />
                <Message message="Слава Украине!" />
            </div>
        </div>
    )
}

export default Dialogs;