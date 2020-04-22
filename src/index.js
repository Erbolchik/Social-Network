import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, messagePost: 'Hi, how are you?', likesCount: 20 },
  { id: 2, messagePost: 'It is my first post', likesCount: 30 },
  { id: 3, messagePost: 'Naruto kun', likesCount: 10 }
]

let dialogsData = [
  { id: 1, name: 'Yerbol' },
  { id: 2, name: 'Yergali' },
  { id: 3, name: 'Nurbol' },
  { id: 4, name: 'Yerasyl' },
  { id: 5, name: 'Askhat' },
  { id: 6, name: 'Ansar' }
]

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'its react' },
  { id: 4, message: 'its so hard' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} messages={messagesData} dialogs={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
