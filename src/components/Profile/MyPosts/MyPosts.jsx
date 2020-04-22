import React from 'react'
import style from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {

    

  let postsElement = props.posts.map(el => <Post messagePost={el.messagePost} likesCount={el.likesCount} />)

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;