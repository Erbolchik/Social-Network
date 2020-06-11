import React from 'react'
import style from './MyPosts.module.css'
import Post from './Posts/Post'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControl/FormsControl'

const maxLength10=maxLengthCreator(10)

const MyPosts = React.memo(props => {
  let postsElement = 
  [...props.profilePage.posts]
  .reverse()
  .map(el => <Post messagePost={el.messagePost} likesCount={el.likesCount} image={el.image} key={el.id} />)

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
        <AddPostReduxForm onSubmit={addNewPost} />
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        component={Textarea} 
        type="textarea" 
        placeholder="Enter your new post" 
        name="newPostBody"
        validate={[required,maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: 'postForm' })(AddNewPostForm)

export default MyPosts;