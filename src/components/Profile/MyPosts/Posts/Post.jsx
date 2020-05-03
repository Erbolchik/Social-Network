import React from 'react'
import style from './Post.module.css'


const Post = (props) => {
  return (

    <div className={style.item}>
      <img src={props.image }/>
       {props.messagePost} 
      <div>
  <span>Like {props.likesCount}</span>
      </div>      
    </div>
  );
}

export default Post;