import React from 'react'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'


let User = ({ user, followingInProgress, follow, unfollow }, ...props) => {
    return <div>
        <span>
            <div className={style.photo}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ?
                        user.photos.small : "https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg"} />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unfollow(user.id)}>Unfollowed</button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>Almaty</div>
                <div>Karaganda</div>
            </span>
        </span>
    </div>
}

export default User