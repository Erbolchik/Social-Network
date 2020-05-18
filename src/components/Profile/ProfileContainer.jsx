import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

export default compose(
    connect(mapStateToProps,
        { getProfile }),
    withRouter,
    )(ProfileContainer)

    //WithAuthRedirect