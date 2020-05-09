import React from 'react'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'

let Users = (props) => {
    console.log(props)
    let pagesCount = 5

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el && style.selectedPage} onClick={(e) => props.onPageChanged(el)}>{el}</span>
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
                            <button onClick={() => { props.unfollow(el.id) }}>Followed</button> :
                            <button onClick={() => { props.follow(el.id) }}>Unfollowed</button>}
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