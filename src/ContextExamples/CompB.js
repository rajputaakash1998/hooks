import React from 'react'
import CompC from './CompC'

function CompB(props) {
    return (
        <div>
            <h1>Component B</h1>
            <CompC name={props.name}/>
        </div>
    )
}

export default CompB
