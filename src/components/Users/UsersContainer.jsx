import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, setUsersTotalCount, requestUsers, follow, unfollow } from '../../redux/usersReducer'
import { getUsers, getFollowingInProgress, getPageSize, getIsFetching, getCurrentPage, getTotalUsersCount } from '../../redux/usersSelectors'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { WithAuthRedirect } from '../HOC/WithAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentPage,
    setUsersTotalCount,
    requestUsers,
    follow,
    unfollow
}), WithAuthRedirect)(UsersContainer)

