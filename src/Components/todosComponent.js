import React from 'react'

function TodoItem(props){
    return(
        <div>
            <label className="checkbox col-lg-12 middle border" style={{display:"flex",justifyContent:"space-between",padding:8}}><input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />{props.item.text}</label>
        </div>
    )
}

export default TodoItem