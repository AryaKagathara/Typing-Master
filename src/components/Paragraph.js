import React from 'react'
import './Style.css'

function Paragraph({passage}) {
    return (
        <div>
            <p className="passage" id="passage">
          {passage}
          </p>
        </div>
    )
}

export default Paragraph
