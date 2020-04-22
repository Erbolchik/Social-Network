import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </div>
      <div className={style.descriptionBlock}>
      ava+description
      </div>
    </div>
  );
}

export default ProfileInfo;