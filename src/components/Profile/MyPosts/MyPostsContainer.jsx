import MyPosts from './MyPosts'
import { addingPostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addingPostActionCreator(newPostBody))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;