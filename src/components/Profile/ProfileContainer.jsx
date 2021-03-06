import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            //7916 my id
            if(!userId){
                this.props.history.push("/login")
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        authorizedIsAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps,
        { getProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)

    //WithAuthRedirect