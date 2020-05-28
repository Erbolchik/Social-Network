import React from 'react'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'


let Users = (props) => {
    let pagesCount = 5

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map((el,id) => {
                return <span key={id} className={props.currentPage === el ? style.selectedPage : null} onClick={(e) => props.onPageChanged(el)}>{el}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div className={style.photo}>
                        <NavLink to={`/profile/${el.id}`}>
                            <img src={el.photos.small != null ? el.photos.small : "https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg"} />
                        </NavLink>
                    </div>
                    <div>
                        {el.followed ?
                            <button disabled={props.followingInProgress.some(id => id === el.id)} 
                            onClick={() => props.unfollow(el.id)}>Unfollowed</button> 
                            :
                            <button disabled={props.followingInProgress.some(id => id === el.id)} 
                            onClick={() =>  props.follow(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>Almaty</div>
                        <div>Karaganda</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users