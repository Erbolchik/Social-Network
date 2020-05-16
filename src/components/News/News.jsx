import React from 'react'
import { useState } from 'react'
import style from './News.module.css'

const News = () => {
    const [countLike, setCountLike] = useState(0)
    const [countToto,setCountTodo]=useState(0)
    const [text,setText] = useState('')
    const [items,setItems]=useState([])

    const onAddItems=(text)=>{
        if (text.length === 0) {
            return;
          }
          const newItem = {
            text: text,
            id: Date.now()
          };

        setItems(items.push(newItem))
        setCountTodo(countToto+1)
    }
    return (
        <div>Music
            count Like = {countLike}
            <br />
            <button onClick={() => setCountLike(countLike + 1)}>Plus like</button>
            <button onClick={() => setCountLike(0)}>Set to Zero</button>


            <h1>Todo List</h1>
            {items[0] }
            <h6>Что нужно сделать?</h6>
            <input type="text" value={text} onChange={(el)=>setText(el.target.value)}></input>
        
            <button onClick={()=>onAddItems(text)} >Добавить{countToto===0?"":"#"+countToto}</button>

        </div>


    );
}

export default News;