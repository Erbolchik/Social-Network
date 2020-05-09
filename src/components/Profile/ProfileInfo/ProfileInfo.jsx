import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div >
      <div>
        <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.small} />
        <div>
          Name : {props.profile.fullName}
        </div>
        <div>
          {props.profile.status}
        </div>
        <div>
          Status : {props.profile.aboutMe}
        </div>
      </div>
      <div>
        <h3>Contacts</h3>
        <div>Facebook : {props.profile.contacts.facebook}</div>
        <div>WebSite : {props.profile.contacts.website}</div>
        <div>VK : {props.profile.contacts.vk}</div>
        <div>Twitter : {props.profile.contacts.twitter}</div>
        <div>Instagram : {props.profile.contacts.instagram}</div>
        <div>Twitter : {props.profile.contacts.youtube}</div>
        <div>GitHub : {props.profile.contacts.github}</div>
        <div>MainLink : {props.profile.contacts.mainLink}</div>
      </div>
    </div>  
  );
}

export default ProfileInfo;