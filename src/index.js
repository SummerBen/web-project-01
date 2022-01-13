import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
  { id: 1, name: 'Keks' },
  { id: 2, name: 'Marina' },
  { id: 3, name: 'Diman' },
  { id: 4, name: 'Andrew' },
  { id: 5, name: 'Nixxon' }
];

let messagesData = [
  { id: 1, message: 'С новым годом, гнида!' },
  { id: 2, message: 'Слава роду славянскому!' }
];

let postsData = [
  {id: 1, message: 'Это я, ОЛД', likesCount: 10, dislikesCount: 0},
  {id: 2, message: 'Ыхыхыхы, привет это я, олд', likesCount: 32, dislikesCount: 14}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export {dialogs, messages, posts};