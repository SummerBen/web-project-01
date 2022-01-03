import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Keks
                </div>
                <div className={s.dialog}>
                    Marina
                </div>
                <div className={s.dialog}>
                    Diman
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Nixxxon
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