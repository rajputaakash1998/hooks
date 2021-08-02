import React, { useContext } from 'react'
import {context} from "./CompA";

function CompC(props) {
    
    const name=useContext(context);
    return (
        <div>
            <h1>Component C {name} </h1>
           
        </div>
    )
}

export default CompC
