import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://sun9-83.userapi.com/impg/0KOUqUbsPb7aP5onFfD6dxMKDKpipDk6p_NJCg/0M5WRnibo6M.jpg?size=2560x1707&quality=96&sign=fa65d1d57bd8cb1b01036da94a38fe12&type=album' />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
      <div>
        <span>dislike </span>
        {props.dislikesCount}
      </div>
    </div>
  )
}

export default Post;