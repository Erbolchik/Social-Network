import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'


class Users extends React.Component {
    getUsers=()=>{
        if(this.props.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                this.props.setUsers(response.data.items)
            })
           
        }
    }

    render(){
        debugger
        return  <div>
            <button onClick={this.getUsers}>Get Users</button>
        {
            this.props.users.map(el => <div key={el.id}>
                <span>
                    <div className={style.photo}>
                        <img src={el.photos.small != null ? el.photos.small : "https://sun9-26.userapi.com/c849536/v849536956/49247/q_QRoLFxoJM.jpg"} />
                    </div>
                    <div>
                        {el.followed ?
                            <button onClick={() => { this.props.unfollow(el.id) }}>Followed</button> :
                            <button onClick={() => { this.props.follow(el.id) }}>Unfollowed</button>}
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
}

export default Users