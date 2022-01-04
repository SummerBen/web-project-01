import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Это я, ОЛД' likesCount=' 2' dislikesCount=' 14' />
        <Post message='Ыхыхыхы, привет это я, олд' likesCount=' 2' dislikesCount=' 8' />
        <Post message='Всем ку, олды на месте??' likesCount=' 8' dislikesCount=' 8' />
      </div>
    </div>
  )
}

export default MyPosts;