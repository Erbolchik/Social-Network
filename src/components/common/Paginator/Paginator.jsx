import React from 'react'
import style from './Paginator.module.css'


let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
    let pagesCount = 5
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
         {pages.map((el,id) => {
                return <span key={id} 
                className={currentPage === el ? style.selectedPage : null} 
                onClick={(e) => onPageChanged(el)}>{el}</span>
            })}
    </div>
}
    

export default Paginator