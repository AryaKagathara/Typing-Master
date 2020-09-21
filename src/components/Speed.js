import React from 'react'
import './Style.css'

function Speed({wpm}) {
    return (
        <div>
            <h1 className="wpm">{wpm}</h1>            
        </div>
    )
}

export default Speed
