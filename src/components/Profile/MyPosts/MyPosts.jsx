import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

  let postsElements = props.store.state.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

  let newPostsElement = React.createRef();

  let addPost = () => {
    props.store.addPost();
  }

  let onPostChange = () => {
    let newText = newPostsElement.current.value;
    props.store.updateNewPostText(newText);
  }
  
  debugger;
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.store.newPostText} ref={newPostsElement} />
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