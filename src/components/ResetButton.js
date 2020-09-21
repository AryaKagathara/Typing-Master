import React from 'react'
import './Style.css'

function ResetButton({resetHandler}) {
    return (
        <div>
             <button className="button" onClick={ () => resetHandler()}>Reset</button>
        </div>
    )
}

export default ResetButton
