import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Это я, ОЛД', likesCount: 10, dislikesCount: 0 },
    { id: 2, message: 'Ыхыхыхы, привет это я, олд', likesCount: 32, dislikesCount: 14 }
  ]

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />)

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;