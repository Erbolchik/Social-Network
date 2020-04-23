import React from 'react'
import style from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {
  debugger

  let postsElement = props.posts.map(el => <Post messagePost={el.messagePost} likesCount={el.likesCount} image={el.image} />)
  let newPostElement = React.createRef();
  
  let addingPost = () => {
     props.addPost(newPostElement.current.value) 
    }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addingPost} >Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;