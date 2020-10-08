import React, { useState, useEffect } from 'react'
import List from '../list/List'
import './Form.css'

function Form(){

    // useEffect(()=>{
    //     var storage=JSON.parse(localStorage.getItem('items'))
    //     setItems(storage)
    // },[])

    const [itemInput, setItemInput]=useState("")
    const [items, setItems]=useState([])

    function handleInputChange(event){
        const itemValue=event.target.value
        setItemInput(itemValue)
    }


    function handleClick(event){
        event.preventDefault();
        setItems([...items, itemInput])
        setItemInput("")
        
        
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
   

    console.log(items)
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