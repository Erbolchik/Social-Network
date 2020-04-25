import React from 'react'
import style from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {

  let postsElement = props.posts.map(el => <Post messagePost={el.messagePost} likesCount={el.likesCount} image={el.image} />)
  let newPostElement = React.createRef();

  let addingPost = () => {
    props.dispatch({type:'ADD-POST'});
  }

  let onPostChange = () => {
    let newText = newPostElement.current.value
    let action = {type:'UPDATE-NEW-POST-TEXT',newText:newText}
    props.dispatch(action);
  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
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