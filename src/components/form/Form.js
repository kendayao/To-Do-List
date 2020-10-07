import React from 'react'
import './Form.css'

function Form(){
    return(
        <div className="form">
            <input type="text" name='item'></input>
            <button>
                <span>Add</span>
            </button>
        </div>
    )

}

export default Form