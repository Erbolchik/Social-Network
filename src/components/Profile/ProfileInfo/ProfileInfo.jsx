import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
//import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
const ProfileInfo = ({profile,status,updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div >
      <div className={style.descriptionBlock}>
        <img src={profile.photos.small} />
        <div>
          Name : {profile.fullName}
        </div>
        <div>
          {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
        {/* <div>
          Status : {props.profile.aboutMe}
        </div> */}
      </div>
      <div>
        <h3>Contacts</h3>
        <div>Facebook : {profile.contacts.facebook}</div>
        <div>WebSite : {profile.contacts.website}</div>
        <div>VK : {profile.contacts.vk}</div>
        <div>Twitter : {profile.contacts.twitter}</div>
        <div>Instagram : {profile.contacts.instagram}</div>
        <div>Twitter : {profile.contacts.youtube}</div>
        <div>GitHub : {profile.contacts.github}</div>
        <div>MainLink : {profile.contacts.mainLink}</div>
      </div>
    </div>  
  );
}


export default ProfileInfo;