import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux';
import {setUserProfile,setIsFetching} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader'

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.setIsFetching(true);
        let userId=this.props.match.params.userId;
        if(!userId)userId=7916; 
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response=>{
            this.props.setUserProfile(response.data);
            this.props.setIsFetching(true);
        })
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        profile:state.profilePage.profile
    }
    
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{
    setUserProfile,setIsFetching
})(WithUrlDataContainerComponent) 