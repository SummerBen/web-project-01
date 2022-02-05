import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, sendMessage, updateNewPostText, updateNewMessageText } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          addPost={addPost}
          sendMessage={sendMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

