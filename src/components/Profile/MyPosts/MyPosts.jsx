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
      <Post message='Это я, ОЛД' like=' 2' dislike=' 14'/>
      <Post message='Ыхыхыхы, привет это я, олд' like=' 2' dislike=' 8'/>
      <Post message='Всем ку, олды на месте??' like=' 8' dislike=' 8'/>
    </div>
  )
}

export default MyPosts;