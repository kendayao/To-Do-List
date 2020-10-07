import React from 'react'
import './List.css'

function List(props){
    return(
        <div onClick={()=>props.delete(props.id)}>
          <li>{props.item}</li>
        </div>
    )
}

export default List