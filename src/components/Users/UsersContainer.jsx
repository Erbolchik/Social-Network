import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage,setUsersTotalCount, getUsers,follow,unfollow}
 from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    setCurrentPage,
    setUsersTotalCount,
    getUsers,
    follow,
    unfollow
})(UsersContainer)

