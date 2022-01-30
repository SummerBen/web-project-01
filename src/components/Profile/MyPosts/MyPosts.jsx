import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />)

  let newPostsElement = React.createRef();

  let addPost = () => {
    let text = newPostsElement.current.value;
    alert(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostsElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;