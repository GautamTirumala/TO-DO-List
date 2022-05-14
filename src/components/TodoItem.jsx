import React, { useState } from 'react'

export default function TodoItem(props) {
    const [isDone , setIsDone]=useState(false)
    function itemClicked(){
        setIsDone(!isDone);
    }
  return (
    //<div onClick={()=>{props.delFun(props.id)}}>
    <li style={{ textDecoration: isDone ? 'line-through' : 'none'}} onClick={itemClicked}>{props.item}</li>
   // </div>
  )
}
