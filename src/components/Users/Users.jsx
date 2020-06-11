import React from 'react'
import style from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'


let Users = ({ currentPage, totalUserCount, pageSize, onPageChanged, followingInProgress, follow, unfollow, users }, ...props) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUserCount={totalUserCount} pageSize={pageSize} />
        <div>
            {users.map(el => <User key={el.id}
                user={el}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow} />)
            }
        </div>
    </div>
}

export default Users