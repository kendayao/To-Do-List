import React, { useState } from 'react'
import List from '../list/List'
import './Form.css'

function Form(){

    const [itemInput, setItemInput]=useState("")
    const [items, setItems]=useState([])

    function handleInputChange(event){
        const itemValue=event.target.value
        setItemInput(itemValue)
    }


    function handleClick(event){
        event.preventDefault();
        setItems(prevItems=>{
            return[...prevItems, itemInput]
        })
        setItemInput("")
    }

    function handleDelete(id){
       
        setItems(prevItems=>{
            return prevItems.filter((items, index)=>{
                return index !== id
            })
        })
    }
  

    return(
        <div>
        <div className="form" id="form">
            <input onChange={handleInputChange} type="text" name='item' value={itemInput}></input>
            <button onClick={handleClick}>
                <span>Add</span>
            </button>
        </div>
            <ul>
                {items.map((item, index)=>{
                     return <List key={index} id={index} item={item} delete={handleDelete}/>
                })}
            </ul>
        </div>
    )

}

export default Form