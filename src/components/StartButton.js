import React from 'react'
import './Style.css'

function StartButton({counterHandler, flag}) {
    return (
        <div>
             <button className="button" onClick={() => counterHandler()}>{!flag ? 'Start' : 'Stop'}</button>
        </div>
    )
}

export default StartButton
