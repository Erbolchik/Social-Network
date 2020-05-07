import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer'
import Users from './Users'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        follow:(userId)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersActionCreator(users))
        } 
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer