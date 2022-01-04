import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/messages/1">Keks</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/2">Marina</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/messages/3">Diman</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/messages/4">Andrew</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/messages/5">Nixxon</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>С новым годом, гнида!</div>
                <div className={s.message}>Слава роду славянскому!</div>
                <div className={s.message}>Слава Украине!</div>
            </div>
        </div>
    )
}

export default Dialogs;