import s from './FriendsBar.module.css';

const FriendsBar = (props) => {
  return <div className={s.item}>
    <img src={props.avatar} />
    <div>{props.name}</div>
  </div>
}

export default FriendsBar;