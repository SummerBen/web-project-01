import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Это я, ОЛД', likesCount: 10, dislikesCount: 0 },
    { id: 2, message: 'Ыхыхыхы, привет это я, олд', likesCount: 32, dislikesCount: 14 }
  ]

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
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} dislikesCount={postsData[0].dislikesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} dislikesCount={postsData[1].dislikesCount} />
      </div>
    </div>
  )
}

export default MyPosts;