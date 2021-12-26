import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message='Это я, ОЛД' likesCount=' 2' dislikesCount=' 14'/>
      <Post message='Ыхыхыхы, привет это я, олд' likesCount=' 2' dislikesCount=' 8'/>
      <Post message='Всем ку, олды на месте??' likesCount=' 8' dislikesCount=' 8'/>
    </div>
  )
}

export default MyPosts;