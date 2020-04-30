import MyPosts from './MyPosts'
import { addingPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'




let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (newText) => {
      dispatch(updateNewPostTextActionCreator(newText))
    },
    addPost: () => {
      dispatch(addingPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;