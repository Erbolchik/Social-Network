import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  let friendsList = props.sidebar.friends.map(el => (<div key={el.id}> {el.name} <img src = {el.image} />  </div>))

let addFriends = ()=>{
  props.addFriends()
}

let OnChangeName = (e)=>{
  let newName=e.target.value
  props.updateNewName(newName)
}

  return (
    <nav className={style.nav}>
      <div className={style.item}><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></div>
      <div className={style.item}><NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink></div>
      <div className={style.item}><NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink></div>
      <div className={style.item}><NavLink to="/login" activeClassName={style.activeLink}>Login</NavLink></div>
      <div className={style.item}><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></div>
      <div className={style.item}><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></div>
      <div className={style.item}><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></div>


      <div className={style.friends}>
        <h1>Friends online</h1>
        {friendsList}
        <input type='text' onChange={OnChangeName} value={props.sidebar.newNameText}/>
        <button onClick={addFriends}>Добавить друга</button>
      </div>
    </nav>
  );
}

export default Navbar;