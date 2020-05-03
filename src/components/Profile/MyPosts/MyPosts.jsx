import React from 'react'
import style from './MyPosts.module.css'
import Post from './Posts/Post'



const MyPosts = (props) => {
  console.log(props)
  let postsElement = props.profilePage.posts.map(el => <Post messagePost={el.messagePost} likesCount={el.likesCount} image={el.image} key={el.id}/>)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let newText = e.target.value
    props.updateNewPostText(newText);
  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost} >Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;