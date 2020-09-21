import React from 'react'
import './Style.css'

function TextArea({inputHandler,input,color,disabled}) {
    return (
        <div>
            <textarea className={color ? "input red" : "input"} name="text" onChange={inputHandler} disabled={disabled}>{input}</textarea>
        </div>
    )
}

export default TextArea
