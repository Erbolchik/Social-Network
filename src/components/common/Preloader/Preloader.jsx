import loading from '../../../assets/images/loading.gif'
import React from 'react'
import style from './Preloader.module.css'
let Preloader = (props) => {
    return (
        <div >
            <img src={loading} className={style.preloader}/>
        </div>
    )
}

export default Preloader
