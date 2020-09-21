import React from 'react'
import './Style.css'

function Counter({count}) {
    return (
        <div>
             <h1 className="counter">{count}</h1>
        </div>
    )
}

export default Counter
